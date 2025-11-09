#!/bin/bash

# Скрипт остановки контейнера n8n-trainer пользователя
# Использование: ./stop-trainer-container.sh USER_ID
# Пример: ./stop-trainer-container.sh user123

set -e

if [ "$#" -lt 1 ]; then
    echo "Usage: $0 USER_ID"
    echo "Example: $0 user123"
    exit 1
fi

USER_ID=$1
CONTAINER_NAME="n8n-trainer-${USER_ID}"

# Проверка существования контейнера
if ! docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "❌ Error: Container $CONTAINER_NAME not found"
    exit 1
fi

echo "🛑 Stopping container: $CONTAINER_NAME"
docker stop "$CONTAINER_NAME"

if [ $? -eq 0 ]; then
    echo "✅ Container stopped successfully"
else
    echo "❌ Failed to stop container"
    exit 1
fi
