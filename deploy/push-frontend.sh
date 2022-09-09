docker-compose build
docker tag frontend_client "${DOCKER_URL}/frontend"
docker push "${DOCKER_URL}/frontend"
