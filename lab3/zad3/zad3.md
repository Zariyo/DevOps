docker build -t new-nginx-html .  
docker run -d -p 4200:80 new-nginx-html
