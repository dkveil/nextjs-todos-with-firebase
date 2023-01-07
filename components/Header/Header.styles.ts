import styled from "styled-components";
import { FaUserAlt } from 'react-icons/fa'

export const HeaderWrapper = styled.header`
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: ${({theme}) => theme.COLORS.black};
    color: white;
    border-bottom: 2px solid ${({theme}) => theme.COLORS.white};
    z-index: 9;
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: inherit;
        text-decoration: none;
    }

    .logo{
        font-size: 32px;
        cursor: pointer;
    }

    div{
        height: 100%;
        width: 200px;
        background-color: cyan;
    }
`

export const StyledUserIcon = styled(FaUserAlt)`
    font-size: 32px;
    cursor: pointer;
`