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
        stations(first: 10, page: 1, searchStr:$searchStr, orderBy: [{column:NIMI, order:ASC}]){ 
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
        departedTrips(departureStationID: $stationId) {
            departureStationID
            departureStationNimi
            returnStationID
            returnStationNimi
            lkm
        }
        returnedTrips(returnStationID:  $stationId){
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