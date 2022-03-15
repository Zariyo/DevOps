## 1.
docker run -it busybox echo "hello world! I'm busybox"

## 2.
docker run -it busybox sh
ls

## 3.
docker exec "hardcore_jemison" sh

## 4.
touch readme.txt
echo "My first file" >> readme.txt
exit
docker run -it busybox
> Podczas uruchomienia taką komendą, plik nie będzie istniał, bo komenda docker run stworzy nowy kontener busybox, w którym nie będzie wcześniej utworzonych plików.
> Gdyby uruchomić docker exec -it "hardcore_jemison" i sprawdzić czy istnieje plik, to byłby tam bo jest to kontener w którym go utworzyliśmy

## 5.
docker exec -it "hardcore_jemison" touch createdFile.txt

## 6.
docker create --name my_container busybox echo "Hello world from my container"
