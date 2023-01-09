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

export const SMALL_STATIONS = gql`
    query {
        stations {
            stationID
            nimi
        }
    }
`;

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
    }
`;