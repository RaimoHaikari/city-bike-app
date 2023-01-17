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
        firstLettersOfStationNames
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
        departuresByTheDayOfWeek(departureStationID:  $stationId)
        returnsByTheDayOfWeek(returnStationID:$stationId)
        returnsByTheHour(returnStationID:$stationId)
        returnedTrips(returnStationID: $stationId){
            departureStationID
            departureStationNimi
            returnStationID
            returnStationNimi
            lkm
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
        }
    }
`;
