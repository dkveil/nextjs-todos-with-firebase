import styled from 'styled-components';

export const InterfaceWrapper = styled.section`
    width: 100vw;
    margin-top: 80px;
    height: calc(100vh - 80px);
    background-color: ${({theme}) => theme.COLORS.black};
`;


export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    padding: 6rem 0;
    width: 400px;
    margin: 0 auto;


    .addtodo-button{
        width: 100%;
        min-height: 42px;
        max-width: 100%;
        padding: 1rem;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        background-color: ${({theme}) => theme.COLORS.white};
        color: ${({theme}) => theme.COLORS.black};
        border: none;
        cursor: pointer;
        margin-bottom: 10px;


        :hover{
            background-color: rgba(255,255,255,0.8);
        }
    }
`

export const AddTodoInputWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 42px;
    gap: 1px;
    margin-bottom: 10px;

    input {
        flex-grow: 1;
        background-color: transparent;
        outline: none;
        border: 1px solid ${({theme}) => theme.COLORS.white};
        color: ${({theme}) => theme.COLORS.white};
        font-size: 14px;
        padding: 1rem;
    }

    button {
        width: 42px;
    }

`

export const IconButton = styled.button`
    background-color: ${({theme}) => theme.COLORS.white};
    border: none;
`

export const TodosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${({theme}) => theme.COLORS.white};
`