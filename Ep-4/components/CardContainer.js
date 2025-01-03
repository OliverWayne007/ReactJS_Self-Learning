import restaurants from "../restaurant-data.js";

import Card from "./Card.js";

const CardContainer = (props) => {
    console.log(props);
    return (
        <div id="cardContainer">
        <Card restaurantData = {restaurants[Number(props.startId) + 0].info} />
        <Card restaurantData = {restaurants[Number(props.startId) + 1].info} />
        <Card restaurantData = {restaurants[Number(props.startId) + 2].info} />
        <Card restaurantData = {restaurants[Number(props.startId) + 3].info} />
        <Card restaurantData = {restaurants[Number(props.startId) + 4].info} />
    </div>
    );
}

export default CardContainer;