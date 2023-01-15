import { LOGO_IMG_URL } from "./constants";

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={LOGO_IMG_URL} alt="FoodZilla"/>

            <div className="nav-items">
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>User</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;