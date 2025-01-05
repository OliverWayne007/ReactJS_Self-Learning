import restaurants from "../restaurant-data.js";

import Card from "./Card.js";

const CardContainer = (props) => {

    const { topRatedFilter } = props;

    return (
        <div id="cardContainer">
            {
                topRatedFilter ? 
                restaurants.filter( (restaurant) => { return restaurant.info.avgRating > 4.3} )
                .map( (restaurant) => { return <Card key={restaurant.info.id} restaurantData = {restaurant.info} ></Card> } )
                : restaurants.map( (restaurant) => { return <Card key={restaurant.info.id} restaurantData = {restaurant.info} ></Card> } ) 
            }
        </div>
    );
}

export default CardContainer