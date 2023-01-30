import { gql } from '@apollo/client';

/*
{
  stations(first: 10, page: 1, searchStr:"", orderBy: [{column:NIMI, order:ASC}]){ 
    data{
      nimi
      kaupunki
      kapasiteetti
    }
    paginatorInfo {
      hasMorePages
      count
    }
  }
}
*/
export const ALL_STATIONS = gql`
    query Query($searchStr: String){
        stations(first: 100, page: 1, searchStr:$searchStr, orderBy: [{column:NIMI, order:ASC}]){ 
            data{
                stationID
                nimi
                kaupunki
                kapasiteetti
            }
            paginatorInfo {
                hasMorePages
                count
            }
        }
    }
`;

/*
 * Hakee listauksen lainausaseminen nimien alkukirjaimista
 */
export const FIRST_LETTERS_OF_STATION_NAMES = gql`
    query {
        finnishStationNames {
            stationID
            nimi
        }
    }
`;


/*
 * Hakee yhteenvedot asemilta suoritetuista lainoista ja sinne
 * tapahtuneista palautuksista.
 */
export const GET_STATION_INFO = gql`
    query getStationInfo($stationId: Int!){
        trips(departureStationID: $stationId, first: 10) {
            paginatorInfo {
                currentPage
                hasMorePages
            }
            data {
                departureStationID
                returnStationId
                coveredDistance
            }
        }
        station(stationID: $stationId){
            stationID
            nimi
            osoite
            kaupunki
            x
            y
        }
        departedTrips(departureStationID: $stationId) {
            departureStationID
            departureStationNimi
            returnStationID
            returnStationNimi
            lkm
        }
        departuresByTheHour(departureStationID: $stationId)
        departuresByTheDayOfWeek(departureStationID:  $stationId){
            day_of_week
            number_of_events
        }
        returnsByTheDayOfWeek(returnStationID:$stationId){
            day_of_week
            number_of_events
        }
        returnsByTheHour(returnStationID:$stationId)
        returnedTrips(returnStationID: $stationId){
            departureStationID
            departureStationNimi
            returnStationID
            returnStationNimi
            lkm
        }
        departuresByTheMonth(departureStationID: $stationId){
            month
            number_of_events
        }
        returnsByTheMonth(returnStationID: $stationId){
            month
            number_of_events
        }
        departedDuration:tripsByDuration(departureStationID: $stationId){
            bin
            number_of_events
        }
        returnedDuration:tripsByDuration(returnStationID: $stationId){
            bin
            number_of_events
        }
        departedDistance:tripsByDistance(departureStationID: $stationId){
            bin
            number_of_events
        }
        returnedDistance:tripsByDistance(returnStationID: $stationId){
            bin
            number_of_events
        }
    }
`;

/*
 * Haetaan yhteenvedo siitä, minne asemalta lainatut pyörät palautettiin
 */
export const GET_DEPARTED_LOANS = gql`
    query getDepartedLoans($stationId: Int!){
        departedTrips(departureStationID: $stationId) {
            departureStationID
            returnStationID
            lkm
        }
    }
`;

/*
 * Haetaan toimintaa yleisesti kuvaavat tunnusluvut
 */
export const GENERAL_SUMMARY = gql`
    query {
        summary{
            number_of_stations
            number_of_bikes
            events_in_day {
                day
                month
                number_of_events
            }
            events_by_the_dayOfWeek {
                day_of_week
                number_of_events
            }
            events_by_month {
                month
                number_of_events
            }
        }
        tripsByDistance {
            bin
            number_of_events
        }
        tripsByDuration {
            bin
            number_of_events
        }
        popularTrips{
            departureStationName
            returnStationName
            lkm
        } 
    }
`;


/*
 * Hakee yhteenvedot asemilta suoritetuista lainoista ja sinne
 * tapahtuneista palautuksista.
 */
export const GET_JOUNERYS = gql`
    query getStationInfo($first: Int!, $page: Int!){
        journeys(first: $first, page: $page){ 
            data{
                departureStationID
                departureStationName
                returnStationName
                returnStationId
                coveredDistance
                duration
            }
            paginatorInfo {
                hasMorePages
                currentPage
                count
                lastPage
                total
            }
        }
    }
`;
