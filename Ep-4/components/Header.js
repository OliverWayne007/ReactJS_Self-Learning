import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (

        <div id="header">

            <div className="logoContainer">
                <img id="logo" src={LOGO_URL} alt="logo" />
            </div>

            <div id="nav-items-container">
                <ul id="nav-items">
                    <li className="nav-item" id="login"> Login </li>
                    <li className="nav-item" id="sign-up"> Sign Up </li>
                    <li className="nav-item" id="cart"> Cart </li>
                </ul>
            </div>

        </div>

    );
}

export default Header;