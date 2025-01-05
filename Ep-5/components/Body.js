import { useState } from "react";

import CardContainer from "./CardContainer.js";

// const [ topRatedBtnClick, setTopRatedBtnClick ] = useState(false);

// const filterTopRatedRestaurants = () => {
//     setTopRatedBtnClick( (prev) => { return !prev } );
// }

const Body = () => {

    const filterTopRatedRestaurants = () => {
        setTopRatedFilter( (prevState) => { return !prevState } );
    }

    const [ topRatedFilter, setTopRatedFilter ] = useState(false);

    return (
        <div id="body">

            <div id="filter-btn-container">
                <button className="top-rated-filter" onClick={filterTopRatedRestaurants} > Top Rated Restaurants </button>
            </div>

            <CardContainer topRatedFilter={topRatedFilter} />

        </div>
    );
}

export default Body;