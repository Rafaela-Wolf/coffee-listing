import styled from 'styled-components';


export const Main = styled.main`
    background-color: #1B1D1F;
    width: 70%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
    width: 50%;
`
export const PageTitle = styled.h1`
    font-size: 32px;
    color: #FEF7EE;
    font-weight: 500;
    padding-bottom: 10px;
    text-align: center;
`
export const PageText = styled.p`
    font-size: 16px;
    color: #6F757C;
    font-weight: 500;
    padding-bottom: 15px;
    text-align: center;
`

export const ButtonsContent = styled.div`
    display: flex;
    gap: 15px;
`

export const Buttons = styled.button`
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    color: #FEF7EE;
    font-size: 14px;
    font-weight: 600;
    background-color: #1B1D1F;
    border: none;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #6F757C;
    }
`

export const CoffeeContent = styled.div`
    display: flex;
    background-color: red;
`

export const CoffeeListing = styled.ul`
    display: flex;
    `