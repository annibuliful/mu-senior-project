git pull
echo "complete pull"

cd frontend && npm run build
echo "complete build"

cp -r dist ../nginx
echo "complete copy"

cd ../nginx
rm -rf web-frontend
echo "complete remove old version"

mv dist web-frontend
echo "complete change build folder name"

cd ..
pwd
docker-compose down
echo "complete down server"

docker-compose up -d
echo "complete deploy new version"
