import { Component } from 'react';
import starImage from '../../assets/images/Star_fill.svg';
import emptyStar from '../../assets/images/Star.svg';
import { AvailableLink, CoffeeContent, CoffeeItem, CoffeeListing, CoffeeName, CoffeePrice, CoffeeVotes, Image, Main, NameAndPrice, NoRatingText, PageText, PageTitle, PopularItem, Ratings, RatingText, SoldOut, StarImg, TextContent } from '../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';

async function fetchCoffeeList() {
    const response = await fetch(`https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`);
    return await response.json();
}

class AllProducts extends Component {
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
                        <AvailableLink to="/available">
                            <span className="text">Available now</span>
                            <FontAwesomeIcon className="icon" icon={faCoffee} />
                        </AvailableLink>


                        <PageTitle>Our Collection</PageTitle>
                        <PageText>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</PageText>
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

                                    <Ratings>
                                        <RatingText>
                                            {coffee.rating
                                                ? <>
                                                    <StarImg src={starImage} alt="Star" />
                                                    {coffee.rating}
                                                </>
                                                : <>
                                                    <StarImg src={emptyStar} alt="Empty Star" />
                                                    <NoRatingText>No ratings</NoRatingText>
                                                </>
                                            }
                                        </RatingText>
                                        {coffee.votes > 0 && <CoffeeVotes>({coffee.votes} votes)</CoffeeVotes>}
                                        <SoldOut>
                                            {!coffee.available && (
                                                <>
                                                    <span className="sold-out-text">Sold out</span>
                                                    <FontAwesomeIcon className="ban-icon" icon={faBan} />
                                                </>
                                            )}
                                        </SoldOut>
                                    </Ratings>
                                </CoffeeItem>
                            ))}
                        </CoffeeListing>
                    </CoffeeContent>
                </Main>
            </>
        );
    }
}

export default AllProducts;