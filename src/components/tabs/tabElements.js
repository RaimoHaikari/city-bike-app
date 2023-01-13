/*
 * Create Responsive Tabs Layout using HTML, CSS & JavaScript
 * https://www.youtube.com/watch?v=huFAqUWXyk4
 */
import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;

    div.title {
        /* padding: 50px 20px 100px; */
        padding-top: ${({theme}) => theme.size.size400};
        padding-bottom: ${({theme}) => theme.size.size900};
        text-align:  center;
        font-size: ${({theme}) => theme.fontSize.fs700};
        color:${({theme}) => theme.color.clrAccent100};
        background: ${({theme}) => theme.color.clrAccent400};
    }

    div.tab-header,
    div.tab-indicator,
    div.tab-body {
        margin: 0 auto;
        /* max-width: 650px; */
        width: 100%;
    }

    div.tab-header {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        height:  ${({theme}) => theme.tabs.headerHeight};
        margin-top: ${({theme}) => theme.tabs.margingTop};
        z-index: 2;
    }

    div.tab-header > div {
        width: 25%;
        text-align: center;
        padding: 15px 0px;
        color: ${({theme}) => theme.color.clrNeutral100};
        font-size:  ${({theme}) => theme.fontSize.fs600};
        cursor: pointer;
        transition: color 300ms ease-in-out;
    }

    div.tab-header > div.active {
        color: ${({theme}) => theme.color.clrPrimary400};
    }

    div.tab-indicator {
        position: relative;
        height: ${({theme}) => theme.tabs.headerHeight};
        margin-top:  ${({theme}) => theme.tabs.margingTop};
    }

    div.tab-indicator > div {
        position: absolute;
        /* left: 0%; */
        width: 25%;
        height: 100%;
        background: ${({theme}) => theme.color.clrNeutral100};
        border-radius: 10px 10px 0px 0px;
        transition: all 300ms ease-in-out;
    }


    div.tab-body {
        position: relative;
    }

    div.tab-body > div {
        position: absolute;
        width: 100%;
        padding: 0px;
        opacity: 0;
        top: -1000vh;
    }

    
    div.tab-body > div > * {
        margin: 10px 0px;
    }

    div.tab-body > div.active {
        top: 0px;
        opacity: 1;
        position: relative;
    }
`;