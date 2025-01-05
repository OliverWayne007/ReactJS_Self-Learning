import { CDN_URL } from "../utils/constants";

const Card = ( { restaurantData } ) => {

    console.log(restaurantData);

    const { name , cuisines , avgRating } = restaurantData;

    const { deliveryTime } = restaurantData.sla;

    return (
        <div className="card">

            <div className="card-image-container">
                <img className="card-image" src={CDN_URL + restaurantData.cloudinaryImageId} alt="Card-Image" />
            </div>

            <div className="card-details-container">
                <ul className="card-details-list">
                    <li className="card-detail" id="name"> {name} </li>
                    <li className="card-detail" id="cuisines"> {cuisines.join(", ")} </li>
                    <li className="card-detail" id="rating"> {avgRating + " stars"} </li>
                    <li className="card-detail" id="deliveryTime"> {deliveryTime + " mins"} </li>
                </ul>
            </div>

        </div>
    );
}

export default Card;