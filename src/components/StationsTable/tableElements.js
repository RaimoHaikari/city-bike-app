import styled from 'styled-components';

export const Table = styled.table`
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;

    th {
        cursor: pointer;
    }

    th, td {
        text-align: left;
        padding: 16px;
    }
      
    tr:nth-child(even) {
        background-color: #f2f2f2
    }
`;

export const CONTAINER = styled.div`
    background-color: ${({theme}) => theme.color.clrNeutral100};
    padding:  ${({theme}) => theme.size.size100};
    display: flex;
    flex-direction: column;
    @media screen and (max-width: ${({theme}) => theme.breakPoint.md}){
        flex-direction: row;
        flex-wrap: wrap;
    }
`;