# TestManagementStudio

Szakdolgozat

## megbeszélések
- Regisztrálja magát egy user

- Admin látja a regisztált user-eket, és tud szerkeszteni szerepkört (), később: csoportok szervezése

- Manager tudjon kérdés csoportokat létrehozni/törölni

- Manager tudjon kérdéseket felvenni csoportokba (minden publikus egyelőre) - később ACL admin - write, manager - read, creator manager - write

- Kérdés egyelőre csak automata, feleletválasztós: kérdés, x válasz, megjelölt a helyes

- Manager tudjon tesztet létrehozni. Minden tesznek van egy creator-a. Legyen minden teszt publikus, azaz bárki kitölthető. Később: tesztek csoportokhoz user-ekhez rendelhetőek

- User teszteket listáz, kiválaszt egyet kitöltésr

- User tesztet kitölti, eredményét rögtön látja a végén

- User teszt eredmény nézete

- User egy korábban kitöltött tesztet read-only újra átnéz

- Manager megnézi a teszt eredményeket listában
 

További lehetőségek:

- megválaszolós tesztek, amit a creator értékel

- nem publikus tesztek, amik userhez vagy csoporthoz vannak rendelve

- tesztek jogosultság kezelése? egy másik másik manager kitöltheti az általam csinálta tesztet?

- ACL a kérdéscsoportokra

- Reporting
                
## domain objects diagram
<img src="https://github.com/IcehT/TestManagementStudio/blob/master/documentation/Domain%20Objects.png">
