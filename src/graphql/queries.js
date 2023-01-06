import { gql } from '@apollo/client';

export const ALL_STATIONS = gql`
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