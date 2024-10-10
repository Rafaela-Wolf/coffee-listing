import React, { Component } from 'react';
import { ButtonAllProducts, ButtonAvailableNow, ButtonsContent, CoffeeContent, CoffeeItem, CoffeeListing, CoffeeName, CoffeePrice, Image, Main, NameAndPrice, PageText, PageTitle, PopularItem, TextContent } from '../../components/style';

async function fetchCoffeeList() {
    const response = await fetch(`https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`);
    const data = await response.json();
    return data.slice(0, 4);
}

class AvailableNow extends Component {
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
                            <ButtonAllProducts>All Products</ButtonAllProducts>
                            <ButtonAvailableNow>Available Now</ButtonAvailableNow>
                        </ButtonsContent>
                    </TextContent>

                    <CoffeeContent>
                        <CoffeeListing>
                            {list.map(coffee => (
                                <CoffeeItem key={coffee.id}>
                                    {coffee.popular && <PopularItem>Popular</PopularItem>}
                                    <Image src={coffee.image} alt={coffee.name} />
                                    <NameAndPrice>
                                        <CoffeeName>{coffee.name} </CoffeeName>
                                        <CoffeePrice>{coffee.price}</CoffeePrice>
                                    </NameAndPrice>
                                </CoffeeItem>
                            ))}
                        </CoffeeListing>
                    </CoffeeContent>
                </Main>
            </>
        );
    }
}

export default AvailableNow;