#!/bin/bash
set -e

# Аргументы
CONTAINER_NAME=$1
EMAIL=$2
FIRST_NAME=$3
LAST_NAME=$4
# Читаем пароль из stdin для безопасности
read -r PASSWORD

# 0. Проверяем, запущен ли контейнер
CONTAINER_STATUS=$(docker inspect -f '{{.State.Running}}' "$CONTAINER_NAME" 2>/dev/null || echo "false")
if [ "$CONTAINER_STATUS" != "true" ]; then
  echo "Container is not running, starting..."
  docker start "$CONTAINER_NAME"
  
  # Ждем пока контейнер запустится и n8n будет готов
  echo "Waiting for n8n to start..."
  sleep 10
  
  # Проверяем готовность n8n (пробуем до 30 секунд)
  for i in {1..30}; do
    if docker exec "$CONTAINER_NAME" wget -q -O- http://localhost:5678/healthz 2>/dev/null | grep -q "ok"; then
      echo "n8n is ready"
      break
    fi
    sleep 1
  done
fi

# 1. Проверяем статус owner setup
OWNER_SETUP=$(docker exec "$CONTAINER_NAME" sqlite3 /home/node/.n8n/database.sqlite \
  "SELECT value FROM settings WHERE key = 'userManagement.isInstanceOwnerSetUp';" 2>/dev/null || echo "")

# 2. Если owner уже настроен - сбрасываем
if [ "$OWNER_SETUP" = "true" ]; then
  echo "Owner already setup, resetting..."
  
  # Сброс user management
  docker exec "$CONTAINER_NAME" n8n user-management:reset
  
  # Сброс флага owner setup в БД
  docker exec "$CONTAINER_NAME" sqlite3 /home/node/.n8n/database.sqlite \
    "UPDATE settings SET value = 'false' WHERE key = 'userManagement.isInstanceOwnerSetUp';"
  
  # Перезапуск контейнера (важно!)
  docker restart "$CONTAINER_NAME"
  
  # Ждем пока контейнер запустится и n8n будет готов
  echo "Waiting for n8n to start..."
  sleep 10
  
  # Проверяем готовность n8n (пробуем до 30 секунд)
  for i in {1..30}; do
    if docker exec "$CONTAINER_NAME" wget -q -O- http://localhost:5678/healthz 2>/dev/null | grep -q "ok"; then
      echo "n8n is ready"
      break
    fi
    sleep 1
  done
else
  echo "Owner not setup yet, proceeding..."
fi

# 4. Создание owner через API
# Создаем временный файл с данными для избежания проблем с экранированием
TEMP_FILE="/tmp/n8n-setup-$$.json"
cat > "$TEMP_FILE" << EOF
{
  "email": "$EMAIL",
  "firstName": "$FIRST_NAME",
  "lastName": "$LAST_NAME",
  "password": "$PASSWORD"
}
EOF

# Копируем файл в контейнер
docker cp "$TEMP_FILE" "$CONTAINER_NAME:/tmp/setup-data.json"

# Выполняем запрос используя файл
docker exec "$CONTAINER_NAME" node -e '
const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("/tmp/setup-data.json", "utf8");
console.error("Request data:", data);

const req = http.request({
  hostname: "localhost",
  port: 5678,
  path: "/rest/owner/setup",
  method: "POST",
  headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data) }
}, (res) => {
  let body = "";
  res.on("data", (chunk) => body += chunk);
  res.on("end", () => {
    console.error("Status:", res.statusCode);
    console.error("Body:", body);
    if (res.statusCode !== 200) {
      console.error("Setup failed");
      process.exit(1);
    }
    console.log("SUCCESS");
  });
});

req.on("error", (err) => { console.error(err.message); process.exit(1); });
req.write(data);
req.end();
'

# Удаляем временные файлы
rm -f "$TEMP_FILE"
docker exec "$CONTAINER_NAME" rm -f /tmp/setup-data.json 2>/dev/null || true

# 5. Получение токена авторизации
TEMP_LOGIN="/tmp/n8n-login-$$.json"
cat > "$TEMP_LOGIN" << EOF
{
  "emailOrLdapLoginId": "$EMAIL",
  "password": "$PASSWORD"
}
EOF

docker cp "$TEMP_LOGIN" "$CONTAINER_NAME:/tmp/login-data.json"

docker exec "$CONTAINER_NAME" node -e '
const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("/tmp/login-data.json", "utf8");

const req = http.request({
  hostname: "localhost",
  port: 5678,
  path: "/rest/login",
  method: "POST",
  headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data) }
}, (res) => {
  let body = "";
  res.on("data", (chunk) => body += chunk);
  res.on("end", () => {
    const setCookie = res.headers["set-cookie"];
    if (setCookie) {
      const authCookie = setCookie.find(c => c.startsWith("n8n-auth="));
      if (authCookie) {
        console.log(authCookie.split("=")[1].split(";")[0]);
      }
    }
  });
});

req.on("error", (err) => { console.error(err.message); process.exit(1); });
req.write(data);
req.end();
'

rm -f "$TEMP_LOGIN"
docker exec "$CONTAINER_NAME" rm -f /tmp/login-data.json 2>/dev/null || true

