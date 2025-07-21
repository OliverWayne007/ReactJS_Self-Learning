const Footer = () => {
    return (
        <div id="footer">
            
            <div className="logoContainer">
                <img className="logo" src="https://cdn.dribbble.com/userupload/17055597/file/original-5ea6836f4e5f00818cb05988f851c645.jpg?resize=400x0" alt="logo" />
            </div>

            <div id="footer-items">
                <ul id="footer-items-list">
                    <li className="footer-item" id="about-us"> About Us </li>
                    <li className="footer-item" id="contact-us"> Contact Us </li>
                    <li className="footer-item" id="legal"> Legal </li>
                    <li className="footer-item" id="available-in"> Available In </li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;