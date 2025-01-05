// ----------------------------------------------------------------------------------------------------------------------------------

// App Layout

// --App
//     --Header
//            --Logo (a div for logo)
//            --navigation-items (Login , Sign Up , Cart) (a div containing an unordered list of items)
//     --Body
//          --Search Bar
//          --Card Container
//                         --Cards
//                               --Image
//                               --Card details like Name of Restaurant , Cuisine , Time of Delivery , Rating
//     --Footer
//            --About Us
//            --Contact Us
//            --Legal
//            --Available In

// ----------------------------------------------------------------------------------------------------------------------------------


// Importing restaurants data from restaurant-data.js
import restaurants from "./restaurant-data";

import Body from "./components/Body.js";

import Header from "./components/Header.js";

import Footer from "./components/Footer.js";

console.log(restaurants);

// App is a functional-component
const App = () => {
    return (
        <div id="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;