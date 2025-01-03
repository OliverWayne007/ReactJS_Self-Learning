import CardContainer from "./CardContainer.js";

const Body = () => {
    return (
        <div id="body">

            <div id="search-bar-container">
                <label htmlFor=""> Search </label>
                <input type="text" />
            </div>

            <CardContainer startId = "0" />

            <CardContainer startId = "5" />

        </div>
    );
}

export default Body;