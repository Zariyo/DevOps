docker build -t new-nginx-hello .
docker run --name new-nginx-hello -d -p 4200:80 nginx
