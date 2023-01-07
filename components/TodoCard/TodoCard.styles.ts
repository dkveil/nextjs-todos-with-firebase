import styled from "styled-components";

export const TodoCardWrapper = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid white;
    padding: 0.75rem 1rem;
    gap: 10px;

    div{
        font-size: 16px;
        flex-grow: 1;
        display: flex;
        align-items: center;

        input {
            font-size: 16px;
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background-color: transparent;
            color: ${({theme}) => theme.COLORS.white};
        }
    }

    svg{
        fill: ${({theme}) => theme.COLORS.white};
        font-size: 24px;
        cursor: pointer;
    }
`