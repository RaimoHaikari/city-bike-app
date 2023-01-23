SolitaDev Academyn esivalintatehtävän front end.

Kyseessä on Reactilla toteutettu SPA -sovellus.

Back end löytyy osoitteesta [http://graafeja.tahtisadetta.fi/](http://graafeja.tahtisadetta.fi/)
Ja Back Endin repository [https://github.com/RaimoHaikari/graafeja](https://github.com/RaimoHaikari/graafeja).


Koostuu kolmesta sivusta:

#### LandingPage

Sovelluksen avausnäkymä, jossa esitetään aineistoa kuvaavia tunnuslukuja. Lisäksi sivulla on kymmenen suosituimman aseman keskinäisiä matkoja kuvaava graafi.

#### Stations

Sivulla esitetään listaus suomenkielisistä lainausasemien nimistä. Nimen lisäksi esitetään sijaintikaupunki ja lainattavissa olevien pyörien määrä.

Listaus on sivutettu asemien alkukirjaimien mukaan. Avausnäkymässä esitetään a-kirjaimella alkavien lainausasemien nimet. Mikäli käyttäjä valitsee näkymän ylälaidassa esitettävästä listasta jonkin kirjaimen, haetaan ja esitetään kyseisellä kirjaimella alkavien lainausasemien nimet. 

Sivu on toteutteu kolmen komponentin avulla.

##### 1. PaginationLetters

Tulostaa Redux-varastosta luettavan asemien alkukirjaimien listan. Kun käyttäjä klikkaa jotain kirjainta, päivitetään Redux-varastoon tallennetun **searchStr-muuttujan** tila.

##### 2. Header

Tulostaa asemalistauksen otsikkotiedot.

##### 3. StationList

Tulostaa valitulla alkukirjaimella alkavat lainausasemat.

Komponentti seuraa Redux-varaston  **searchStr-muuttujan** tilaa. 

Komponentin alustamisen yhdeydessä suoritetaan **ALL_STATIONS** GraphQl-kysely. Kyselylle annetaan parametrinä kirjain. Vastauksessaan palvelin palauttaa kyseisellä kirjaimella alkavien lainausasemien perustiedot, jonka jälkeen komponentti tulostaa nämä tiedot.

GraphQl-kyselylle parametrinä annettavan kirjaimen arvo perustuu **searchStr-muuttujan** tilaan. Aina kun kyseisen muuttujan arvo vaihtuu, uusitaan kysely ja päivitetään sivulla esitettävä listaus.

Palvelimelta haetut tiedot tallennetaan selaimen välimuistiin, joten (istunnon aikana) jo kertaallen haettuja tietoja ei tarvitse hakea palvelimelta enää uudelleen.

### Ulkoasu

Ulkoasu on toteuttu kahdella tasolla.

index.css	Väriin ja erilaisiin kokoasetuksiin liittyvien muuttuja-arvojen asetus.
app.css		Sivuston yleislayout

Yksittäisten komponenttien ulkoasu on toteuttu styled components -kirjaston avulla. Komponenttikohtaiset tyylimäärittelyt on tallennettu komponentin sisältävään hakemistoon.