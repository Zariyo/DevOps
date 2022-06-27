# Aplikacja Kubernetes React-Express-Redis-Mongo
### Wiktor Płużek
## Aplikacja korzysta z: #
- **React** Do tworzenia aplikacji działającej w przeglądarce
- **Express.js** do obsługi endpointów dla baz danych
- **Redis** do obsługi 'cache'
- **MongoDB** do tworzenia bazy danych
- **Kubernetesa** oraz **docker desktop** do obsługi Podów tworzonych za pomocą plików .yaml

## Na stronie aplikacji można ##
- Sprawdzić funkcjonowanie api Express:
    - zwiększanie oraz wyświetlanie przekazywanego przez nie numeru
- Wyświetlać oraz dodawać filmy do bazy danych w Mongo
- Wyświetlać ostatnio dodany film przez cache z Redis

## Aby rozpocząć ##

Osobiście, aby ingress zadziałał, musiałem użyć komendy
> kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml

Następnie dla każdego z plików .yaml należy użyć komendy
> kubectl apply -f plik.yaml

a następnie wkleić do pliku /etc/hosts
> 127.0.0.1 project-k8s-app.com




## Użyta konfiguracja
Dla każdego z deploymentu użyłem po 1 replice, z wyjątkiem deploymentu aplikacji frontowej, gdzie użyłem dwóch.  

Użyłem serwisu nodeports.yaml do udostępnienia portów  
Porty w formacie Baza : Port wewnętrzny : Port udostępniony
- Mongo : 27017 : 30270
- Redis : 6379 : 30637
- Api : 5000 : 30500

#### Stworzone przeze mnie aplikacje front-app i backend-app są dostępne na dockerhub:
https://hub.docker.com/u/wiktorplu

## Dostęp do aplikacji
Strona znajduje się pod adresem
>http://project-k8s-app.com:30080/

Natomiast wszystkie zapytania skierowane do backendu idą pod adres
> http://project-k8s-app.com:30080/api

Można również bezpośrednio połączyć się z bazami danych lub api pod portami wystawionymi w nodeports.yaml  
przykładowo http://project-k8s-app.com:30500/movies


#### Pomocne Linki ####
- https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/#before-you-begin
- https://kubernetes.github.io/ingress-nginx/deploy/
- https://nirajsonawane.github.io/2020/04/25/Deploy-React-Spring-Boot-MongoDB-Fullstack-application-on-Kubernetes/
