Aplikacja korzysta z:
    - react Do tworzenia aplikacji działającej w przeglądarce
    - Express.js do obsługi endpointów dla baz danych
    - Redis do obsługi 'cache'
    - MongoDB do tworzenia bazy danych
    - Kubernetesa oraz docker desktop do obsługi Podów tworzonych za pomocą plików .yaml

## Na stronie aplikacji można
    - Sprawdzić funkcjonowanie api Express:
        - zwiększanie oraz wyświetlanie przekazywanego przez nie numeru
    - Wyświetlać oraz dodawać filmy do bazy danych w Mongo
    - Wyświetlać ostatnio dodany film przez cache z Redis

### Aby rozpocząć
    należy użyć komendy
    > kubectl apply -f
    Dla każdego z plików .yaml