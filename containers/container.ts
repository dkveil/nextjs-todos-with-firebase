import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: inherit;
    margin: 0 auto;
    padding: 0 2rem;

    ${({theme}) => theme.MEDIA.tablet}{
        max-width: 750px;
    }

    ${({theme}) => theme.MEDIA.desktop}{
        flex-direction: row;
        max-width: 970px;
    }

    ${({theme}) => theme.MEDIA.large}{
        max-width: 1170px;
    }
`