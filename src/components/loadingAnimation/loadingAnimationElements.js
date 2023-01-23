import styled from 'styled-components';

export const Container = styled.div`

    background:  ${({theme}) => theme.color.clrPrimary400};

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column-reverse;

    align-items: center;
    justify-content: center;

    &::after {
        content: "";
        width: 250px;
        height: 250px;
        border: 15px solid #ddd;
        border-top-color: ${({theme}) => theme.color.clrAccent400};

        border-radius: 50%;
        animation: loading 0.75s ease infinite;
    }

    @keyframes loading {
        from { transform: rotate(0turn)}
        to { transform: rotate(1turn)}
    }

    div.msg {
        font-size: ${({theme}) => theme.fontSize.fs900};
        margin-top: ${({theme}) => theme.size.size800};
        color: ${({theme}) => theme.color.clrAccent400};
    }
`;