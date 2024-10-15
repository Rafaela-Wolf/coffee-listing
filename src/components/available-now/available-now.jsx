import { Component } from 'react';
import { BackLink, CoffeeContent, CoffeeItemAN, CoffeeListing, CoffeeName, CoffeePrice, Image, Main, NameAndPrice, PopularItem } from '../../components/style';

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
                    <BackLink to="/">All products</BackLink>
                    <CoffeeContent>
                        <CoffeeListing>
                            {list.map(coffee => (
                                <CoffeeItemAN key={coffee.id}>
                                    {coffee.popular && <PopularItem>Popular</PopularItem>}
                                    <Image src={coffee.image} alt={coffee.name} />
                                    <NameAndPrice>
                                        <CoffeeName>{coffee.name} </CoffeeName>
                                        <CoffeePrice>{coffee.price}</CoffeePrice>
                                    </NameAndPrice>
                                </CoffeeItemAN>
                            ))}
                        </CoffeeListing>
                    </CoffeeContent>
                </Main>
            </>
        );
    }
}

export default AvailableNow;