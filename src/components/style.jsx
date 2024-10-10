import styled from 'styled-components';
import bgImgTextContent from '../assets/images/vector.svg';

export const Main = styled.main`
    background-color: #1B1D1F;
    width: 70%;
    max-width: 1440px;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    border-radius: 8px;
`

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-image: url(${bgImgTextContent});
    background-repeat: no-repeat;
    background-position: right top;
    margin-top: 15px;
`

export const PageTitle = styled.h1`
    font-size: 32px;
    color: #FEF7EE;
    font-weight: 500;
    padding: 30px 0 8px 0;
    text-align: center;
    cursor: default;
`

export const PageText = styled.p`
    font-size: 16px;
    color: #6F757C;
    font-weight: 500;
    padding-bottom: 15px;
    text-align: center;
    line-height: 1.5;
    cursor: default;
`

export const ButtonsContent = styled.div`
    display: flex;
    gap: 15px;
`

export const ButtonAllProducts = styled.button`
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    color: #FEF7EE;
    font-size: 14px;
    font-weight: 600;
    background-color: #6F757C;
    border: none;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #6F757C;
    }
`

export const ButtonAvailableNow = styled.button`
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
    width: 100%;
    padding: 15px;
`

export const CoffeeListing = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5px;
`

export const CoffeeItem = styled.li`
    padding: 20px;
    position: relative;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`

export const PopularItem = styled.p`
    color: #111315;
    font-size: 10px;
    font-weight: 700;
    background-color: #F6C768;
    padding: 5px 10px;
    border-radius: 20px;
    text-align: center;
    width: fit-content;
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 20px;
`

export const NameAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`

export const CoffeeName = styled.p`
    color: #FEF7EE;
    font-size: 16px;
    font-weight: 600;
`

export const CoffeePrice = styled.p`
    color: #111315;
    font-size: 12px;
    font-weight: 700;
    background-color: #BEE3CC;
    padding: 3px 6px;
    border-radius: 5px;
`

export const Ratings = styled.div`
    display: flex;
`

export const RatingText = styled.p`
    color: #FEF7EE;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
`

export const NoRatingText = styled.p`
    color: #6F757C;
`

export const StarImg = styled.img`
    width: 22px;
    height: 22px;
`

export const CoffeeVotes = styled.p`
    color: #6F757C;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding-left: 6px;
`

export const SoldOut = styled.p`
    color: #ED735D;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-left: auto;
`