import styled from 'styled-components';

export const Container = styled.div`

    /* needed to position the dropdown content */
    position: relative;
    display: inline-block;

    .searchIcon {
        font-size: ${({theme}) => theme.fontSize.fs600};
        margin-right:  ${({theme}) => theme.size.size300};
    }

    button.dropBtn {
        background-color: ${({theme}) => theme.color.clrAccent400};
        color: white;
        padding: ${({theme}) => theme.size.size500};
        font-size: ${({theme}) => theme.fontSize.fs600};
        border: none;
        cursor: pointer;
    }

    button.dropBtn:hover,
    button.dropBtn:focus {
        background-color: ${({theme}) => theme.color.clrPrimary400};
    }

    @media (max-width: 50em) {

        button.dropBtn {
            padding: ${({theme}) => theme.size.size300};;
        }
    }

    /* The search field */
    #namesInput {
        box-sizing: border-box;
        font-size:${({theme}) => theme.fontSize.fs600};
        padding: ${({theme}) => theme.size.size300};
        border: none;
        border-bottom: 1px solid #ddd;
        width: 100%;
    }

    /* The search field when it gets focus/clicked on */
    #namesInput:focus {outline: 3px solid #ddd;}

    /* Dropdown Content (Hidden by Default) */
    .dropdownContent {
      display: none; 
      position: absolute;
      background-color: ${({theme}) => theme.color.clrNeutral100};;
      min-width: 230px;
      border: 1px solid #ddd;
      z-index: 100;
    }

    
    /* Links inside the dropdown */
    .dropdownContent P {
      color: ${({theme}) => theme.color.clrNeutral900};
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      cursor: pointer;
    }

    .dropdownContent P.odd {
        background: ${({theme}) => theme.color.clrAccent100};
    }
    
    /* Change color of dropdown links on hover */
    .dropdownContent P:hover {background-color: ${({theme}) => theme.color.clrPreElement}}

    .show {display:block};

    /* Määritetään nimilistan maksimipituus */
    div.listWrapper {
        max-height: 400px;
        overflow-y: auto;
    }

`;

export const SearchContainer = styled.div``;

export const Input = styled.input`
    display:inline-block;
`;