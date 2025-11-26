#!/bin/bash

# Скрипт создания контейнера n8n-trainer для пользователя
# Использование: ./create-trainer-container.sh USER_ID LESSON [--force]
# Пример: ./create-trainer-container.sh user123 lesson-01-if --force

set -e

# Проверка флага --force
FORCE=false
for arg in "$@"; do
    if [ "$arg" = "--force" ]; then
        FORCE=true
    fi
done

# Проверка аргументов
if [ "$#" -lt 2 ]; then
    echo "Usage: $0 USER_ID LESSON [--force]"
    echo "Example: $0 user123 lesson-01-if"
    echo "  --force: Automatically remove existing container without confirmation"
    exit 1
fi

USER_ID=$1
LESSON=$2
CONTAINER_NAME="n8n-trainer-${USER_ID}-${LESSON}"
# Используем образ из docker-compose (формат: docker-freecode-n8n-trainer-lesson-XX-YY)
IMAGE_NAME="docker-freecode-n8n-trainer-${LESSON}"
NETWORK_NAME="${NETWORK_NAME:-prisma-cms-default}"

# Проверка существования образа
if ! docker image inspect "$IMAGE_NAME" &> /dev/null; then
    echo "❌ Error: Image $IMAGE_NAME not found"
    echo "Please build the image first using docker-compose:"
    echo "  docker-compose build n8n-trainer-${LESSON}"
    echo ""
    echo "Or check available images:"
    echo "  docker image list | grep lesson"
    exit 1
fi

# Проверка существования контейнера
if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    if [ "$FORCE" = true ]; then
        echo "⚠️  Container $CONTAINER_NAME already exists (force mode)"
        echo "🗑️  Removing existing container..."
        docker rm -f "$CONTAINER_NAME" || true
    else
        echo "⚠️  Container $CONTAINER_NAME already exists"
        read -p "Do you want to remove it and create a new one? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo "🗑️  Removing existing container..."
            docker rm -f "$CONTAINER_NAME" || true
        else
            echo "❌ Aborted"
            exit 1
        fi
    fi
fi

echo "🚀 Creating n8n-trainer container for user: $USER_ID"
echo "   Lesson: $LESSON"
echo "   Container: $CONTAINER_NAME"

# Создание контейнера
docker run -d \
    --name "$CONTAINER_NAME" \
    --network "$NETWORK_NAME" \
    --restart always \
    --label "app.type=n8n-trainer" \
    --label "app.lesson=${LESSON}" \
    --label "app.user_id=${USER_ID}" \
    -e DB_TYPE=sqlite \
    -e N8N_SECURE_COOKIE=false \
    -e N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS=false \
    -e N8N_DIAGNOSTICS_ENABLED=false \
    -e N8N_DIAGNOSTICS_CONFIG_FRONTEND=false \
    -e N8N_DIAGNOSTICS_CONFIG_BACKEND=false \
    "$IMAGE_NAME"

if [ $? -eq 0 ]; then
    echo "✅ Container created successfully!"
    echo "   Container name: $CONTAINER_NAME"
    echo "   Lesson: $LESSON"
    echo ""
    echo "📊 Container info:"
    docker ps --filter "name=$CONTAINER_NAME" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
else
    echo "❌ Failed to create container"
    exit 1
fi
