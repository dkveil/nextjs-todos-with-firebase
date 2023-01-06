import styled from "styled-components";

export const SectionWrapper = styled.section`
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.black};
    box-sizing: border-box;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 100px;

    h2{
        text-transform: uppercase;
        font-size: 42px;
        color: white;
        margin-bottom: 20px;
    }

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        input, button, .error{
            width: 300px;
            min-height: 42px;
            max-width: 100%;
            padding: 1rem;
        }

        input {
            background-color: ${({theme}) => theme.COLORS.black};
            color: ${({theme}) => theme.COLORS.white};
            border: 1px solid ${({theme}) => theme.COLORS.white};
            font-size: 16px;
        }

        button {
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
            background-color: ${({theme}) => theme.COLORS.white};
            color: ${({theme}) => theme.COLORS.black};
            border: none;

            :hover{
                background-color: rgba(255,255,255,0.8)
            }
        }

        .error{
            background-color: #ef9a9a;
            color: #F44336;
            border: 1px solid #F44336;
            text-align: center;
        }
    }

`