docker volume create vol1  
docker run -d --name postgre --mount source=vol1,target=/var/lib/postgresql/data  
docker run -d --name postgre -p 5432:5432 -e POSTGRES_PASSWORD=123 --mount source=vol1,target=/app postgres  
docker exec -it postgre bash  
 psql -h localhost -p 5432 -U postgres -W  
 CREATE DATABASE baza1;  
 CREATE TABLE tab1(  
  username VARCHAR(50)  
 );  
 INSERT INTO tab1(username) VALUES ('user1');  

Przy takie konfiguracji, po usunięciu i ponownym utworzeniu kontenera postgres z tym samym volume,  
dane pozostają niezmienione