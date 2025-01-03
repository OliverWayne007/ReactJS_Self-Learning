import { CDN_URL } from "../utils/constants";

const Card = ( { restaurantData } ) => {
    console.log(restaurantData);
    return (
        <div className="card">

            <div className="card-image-container">
                <img className="card-image" src={CDN_URL + restaurantData.cloudinaryImageId} alt="Card-Image" />
            </div>

            <div className="card-details-container">
                <ul className="card-details-list">
                    <li className="card-detail" id="name"> {restaurantData.name} </li>
                    <li className="card-detail" id="cuisines"> {restaurantData.cuisines.join(", ")} </li>
                    <li className="card-detail" id="rating"> {restaurantData.avgRating + " stars"} </li>
                    <li className="card-detail" id="deliveryTime"> {restaurantData.sla.deliveryTime + " mins"} </li>
                </ul>
            </div>

        </div>
    );
}

export default Card;