# Instrukcja uruchomienia projektu:

1. Uruchomienie bazy danych MySQL:
    * Sprawdź czy masz zainstalowanego Docker'a: docker --version
    * Uruchom Docker desktop
    * Uruchom terminal w katalogu: <lokalizacja projektu>/docker
    * Wykonaj komendę: docker-compose up
    * BRAWO! Uruchomiona została instancja bazy danych z odpowiednimi danymi!

2. Uruchomienie projektu oraz zasilenie bazy danych:
    * Uruchom terminal w katalogu projektu (katalog z plikiem package.json)
    * Wykonaj komendę: npm start
    * Uruchom przeglądarkę internetową i przejdź pod adres: http://localhost:3000/
    * BRAWO! Uruchomiłeś aplikację - możesz rozpocząć korzystanie z niej :)
    * P.S. Baza danych zasilona została danymi z pliku init.js

3. Dodatkowa konfiguracja bazy danych:
    * W celu zarządzania bazą danych uruchom program IntelliJ
    * Otwórz projekt (wskaż lokalizację projektu z plikiem package.json)
    * Otwórz zakładkę "Database" (View -> Tool Windows -> Database) i skonfiguruj połączenie z bazą z następującymi danymi (New):
      ** Host: localhost
      ** Port: 3306
      ** User: root
      ** Password: root
      ** Database: tin-s17084
    * Możesz korzystać z bazy z poziomu IntelliJ!
    * Możesz również wykorzystać konsolę phpMyAdmin pod adresem http://localhost:8183/
      ** Serwer: mysql
      ** User: root
      ** Password: root