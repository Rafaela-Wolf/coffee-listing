import React, { Component } from 'react';
import starImage from '../../assets/images/Star_fill.svg';
import emptyStar from '../../assets/images/Star.svg';
import { Buttons, ButtonsContent, CoffeeContent, CoffeeListing, Main, PageText, PageTitle, TextContent } from './style';

async function fetchCoffeeList() {
    const response = await fetch(`https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`);
    return await response.json();
}

class CoffeeList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    async componentDidMount() {
        try {
            const coffeeData = await fetchCoffeeList();
            this.setState({ list: coffeeData });
        } catch (error) {
            console.error('Erro ao buscar a lista de cafés:', error);
        }
    }

    render() {
        const { list } = this.state;

        return (
            <>
                <Main>
                    <TextContent>
                        <PageTitle>Our Collection</PageTitle>
                        <PageText>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</PageText>
                        <ButtonsContent>
                            <Buttons>All Products</Buttons>
                            <Buttons>Available Now</Buttons>
                        </ButtonsContent>
                    </TextContent>

                    <CoffeeContent>
                        <CoffeeListing>
                            {list.map(coffee => (
                                <li key={coffee.id}>
                                    <p>{coffee.popular ? 'Popular' : ''}</p>
                                    <img src={coffee.image} alt={coffee.name} />
                                    <div>
                                        <p>{coffee.name} </p>
                                        <p>{coffee.price}</p>
                                    </div>

                                    <div>
                                        <p>
                                            {coffee.rating
                                                ? <>
                                                    <img src={starImage} alt="Star" />
                                                    {coffee.rating}
                                                </>
                                                : <>
                                                    <img src={emptyStar} alt="Empty Star" />
                                                    No ratings
                                                </>
                                            }
                                        </p>
                                        {coffee.votes > 0 && <p>{coffee.votes}</p>}
                                        <p>{coffee.available ? '' : 'Sold out'}</p>
                                    </div>
                                </li>
                            ))}
                        </CoffeeListing>
                    </CoffeeContent>
                </Main>
            </>
        );
    }
}

export default CoffeeList;