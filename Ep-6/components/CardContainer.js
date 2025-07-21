import restaurants from "../restaurant-data.js";

import Card from "./Card.js";

const CardContainer = (props) => {

    // Syntax for the useEffect-Hook

    // useEffect( <callback function> , <dependency list> ) ---> useEffect( () => {----} , [----] )

    // Since the dependency list of the following useEffect-hook is empty, The following useEffect-hook executes it's callback function 
    // after the CardContainer component (which is just a javascript function that returns a JSX-element or in other words a React-element)
    // mounts or in other words rendered for the very first time or in other words when the CardContainer function is executed for the 
    // very first time.

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

export default CardContainer;