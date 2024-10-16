import styled from 'styled-components';
import bgImgTextContent from '../assets/images/vector.svg';
import { Link } from 'react-router-dom';

// INTRODUCTION TO THE COMPANY

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
    position: relative;
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

    @media(max-width: 630px) {
        font-size: 24px;
    }

    @media(max-width: 412px) {
        font-size: 18px;
    }

    @media(max-width: 360px) {
        font-size: 14px;
    }

    @media(max-width: 293px) {
       padding-right: 10px;
    }
`

export const PageText = styled.p`
    font-size: 16px;
    color: #6F757C;
    font-weight: 500;
    padding-bottom: 15px;
    text-align: center;
    line-height: 1.5;
    cursor: default;

    @media(max-width: 630px) {
        font-size: 14px;
    }

    @media(max-width: 360px) {
        font-size: 12px;
    }
`

export const AvailableLink = styled(Link)`
    text-decoration: none;
    background-color: #6F757C;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    color: #FEF7EE;
    font-size: 12px;
    font-weight: 700;
    border: none;
    letter-spacing: 1.2px;
    transition: transform 0.5s ease-in-out;
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 20px;

    .icon {
        display: none;
    }

    &:hover {
        transform: scale(1.05);
        background-color: #F6C768;
        color: #111315;
    }

    @media(max-width: 842px) {
        .text {
            display: none; 
        }
        .icon {
            display: inline-block;
            padding: 0;
        }
    }
`

// COFFE LIST

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

    @media(max-width: 395px) {
        padding: 4px 8px;
    }
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

    @media(max-width: 425px) {
        font-size: 12px;
    }

    @media(max-width: 395px) {
        font-size: 10px;
    }
`

export const CoffeePrice = styled.p`
    color: #111315;
    font-size: 12px;
    font-weight: 700;
    background-color: #BEE3CC;
    padding: 3px 6px;
    border-radius: 5px;

    @media(max-width: 395px) {
        font-size: 10px;
        padding: 2px 4px;
    }

    @media(max-width: 350px) {
        font-size: 8px;
    }
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

    @media(max-width: 395px) {
        font-size: 12px;
    }
`

export const NoRatingText = styled.p`
    color: #6F757C;

    @media(max-width: 395px) {
        font-size: 12px;
    }
`

export const StarImg = styled.img`
    width: 22px;
    height: 22px;

    @media(max-width: 395px) {
        width: 18px;
        height: 18px;
    }
`

export const CoffeeVotes = styled.p`
    color: #6F757C;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding-left: 6px;

    @media(max-width: 425px) {
        font-size: 10px;
    }
`

export const SoldOut = styled.p`
    .sold-out-text {
        color: #ED735D;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        padding-left: 72px;
    }
    
    .ban-icon {
        display: none;
    }

    @media(max-width: 425px) {
        .sold-out-text{
            padding-left: 25px;
            font-size: 12px;
        }
    }

    @media(max-width: 409px) {
        .sold-out-text{
            padding-left: 15px;
        }
    }

    @media(max-width: 395px) {
        .sold-out-text{
            padding-left: 8px;
        }
    }

    @media(max-width: 360px) {
        .sold-out-text{
            display: none;
        }
        
        .ban-icon {
            display: inline-flex;
            color: #ED735D;
            font-size: 10px;
            font-weight: 800;
            align-items: center;
            padding-left: 25px;
        }
    }

    @media(max-width: 339px) {
        .ban-icon {
            padding-left: 15px;
        }
    }

    @media(max-width: 322px) {
        .ban-icon {
            padding-left: 10px;
        }
    }

    @media(max-width: 310px) {
        .ban-icon {
            padding-left: 5px;
        }
    }

    @media(max-width: 303px) {
        .ban-icon {
            padding-left: 2px;
        }
    }
`

export const BackLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: #FEF7EE;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 10px;

    @media(max-width: 293px) {
        font-size: 16px;
        margin: 5px;
    }
`

export const CoffeeItemAN = styled.li`
    padding: 40px;
    position: relative;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`