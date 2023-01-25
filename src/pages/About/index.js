import {
    Container
} from "./aboutElements";

const About = () => {

    return (
        <Container className="container padding-block-700 ">
            <h2>Helsinki city bike app</h2>
            <div>
                Solita järjestää kevään 2023 aikana <a rel="noreferrer "href="https://www.solita.fi/en/academy/" target="_blank">Solita Dev Academyn</a>.
                Koulutusohjelmaan hakevien tulee liittää hakemukseen ratkaisunsa <a rel="noreferrer "href="https://github.com/solita/dev-academy-2023-exercise" target="_blank">esivalintatehtävään</a>.
                Tämä sivusto muodostaa minun vastaukseni käyttöliittymän.
            </div>
            <div>
                Kysessä on Reactilla toteutettu SPA (Single page app).
            </div>
            <div>Sovellusta tehtäessä on käytetty apuna seuraavia kirjastoja:</div>
            <ul>
                <li>
                    <a rel="noreferrer "href="https://www.apollographql.com/" target="_blank">Apollo Client</a>.
                </li>
                <li>
                    <a rel="noreferrer "href="https://d3js.org/" target="_blank">D3.js</a>.
                </li>
                <li>
                    <a rel="noreferrer "href="https://redux.js.org/" target="_blank">Redux</a>.
                </li>
                <li>
                    <a rel="noreferrer "href="https://styled-components.com/" target="_blank">styled-components</a>.
                </li>
            </ul>
            <div>
                Koodi löytyy GitHub repositorystä <a rel="noreferrer "href="https://github.com/RaimoHaikari/city-bike-app" target="_blank">https://github.com/RaimoHaikari/city-bike-app</a>.
            </div>

            <h3>BackEnd</h3>

            <div>Backend on toteutettu Laravelillä.</div>

            <div>Aineisto on esikäsittelyn jälkeen tallennettu MariaDB-tietokantaan. Front- ja BackEndin välinen yhteydenpito hoituu GraphQL-kyselyjen avulla.</div>
            <div>
                BackEndin koodi löytyy GitHub repositorystä <a rel="noreferrer "href="https://github.com/RaimoHaikari/graafeja" target="_blank">https://github.com/RaimoHaikari/graafeja</a>.
            </div>
            <div>
                GraphQL-kyselyjä voi testata osoitteessa: <a rel="noreferrer "href="http://graafeja.tahtisadetta.fi/graphiql" target="_blank">http://graafeja.tahtisadetta.fi/graphiql</a>.
            </div>
        </Container>
    );
};

export default About;