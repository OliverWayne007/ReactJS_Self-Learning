import { LOGO_URL } from "../utils/constants";

import signup from "../assets/signup.png"
import login from "../assets/login.png"
import cart from "../assets/cart.png"

const Header = () => {
    return (

        <div id="header">

            <div className="logoContainer">
                <img className="logo" id="appLogo" src={LOGO_URL} alt="logo" />
            </div>

            <div className="search-bar-container">
                <span class="search-icon material-symbols-outlined"> search </span>
                <input className="search-bar" type="search" placeholder="Search for Restaurant, Cuisine or a Dish" />
            </div>

            <div id="nav-items-container">
                <div className="nav-item" id="loginContainer">
                    <img className="logo" id="loginLogo" src={login} />
                    <span> Login </span>
                </div>
                <div className="nav-item" id="signUpContainer">
                    <img className="logo" id="signUpLogo" src={signup} />
                    <span> Sign Up </span>
                </div>
                <div className="nav-item" id="cartContainer">
                    <img className="logo" id="cartLogo" src={cart} />
                    <span> Cart </span>
                </div>
            </div>

        </div>

    );
}

export default Header;