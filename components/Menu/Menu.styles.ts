import styled from "styled-components";
import { GrClose } from 'react-icons/gr'

export const MenuWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: ${({theme}) => theme.COLORS.white};
`

export const ContentWrapper = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;

    button {
        width: 300px;
        min-height: 42px;
        max-width: 100%;
        padding: 1rem;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        background-color: ${({theme}) => theme.COLORS.black};
        color: ${({theme}) => theme.COLORS.white};
        border: none;

        :hover{
            background-color: rgba(0,0,0,0.6);
        }
    }
`

export const CloseIcon = styled(GrClose)`
    font-size: 32px;
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    cursor: pointer;
`