import { useState } from "react";

import CardContainer from "./CardContainer.js";

import filter from "../assets/filter.png"
import check from "../assets/check.png"

const Body = () => {

    const filterTopRatedRestaurants = () => {
        setTopRatedFilter( (prevState) => { return !prevState } );
    }

    const [ topRatedFilter, setTopRatedFilter ] = useState(false);

    return (
        <div id="body">

            <div id="filter-container">
                <div className={topRatedFilter ? "filter-image-container-active" : "filter-image-container"}>
                    <img id="filterIcon" src={filter} alt="filter" />
                    <span> Filter </span>
                </div>
                <div id="filter-buttons-container">
                    <button className={topRatedFilter ? "top-rated-filter-btn-active" : "top-rated-filter-btn"} onClick={filterTopRatedRestaurants} > 
                        {topRatedFilter ? 
                            <div id="top-rated-restaurants-filter">
                                <img id="checkIcon" src={check} />
                                <span> Top Rated Restaurants </span>
                            </div> :
                            "Top Rated Restaurants"
                        }  
                    </button>
                </div>
            </div>

            <CardContainer topRatedFilter={topRatedFilter} />

        </div>
    );
}

export default Body;