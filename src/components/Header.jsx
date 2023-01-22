import ld_logo from "../assets/images/ld_logo.png";
import cartIcon from "../assets/icons/cart.svg";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav id="header" className="bg-black text-white">
      <div className="container w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-xl">
            Home
          </Link>
          <Link to="#about" className="text-xl">
            About
          </Link>
        </div>
        <div className="logo-wrapper pl-4 flex items-center">
          <Link
            to="/"
            className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
          >
            <img src={ld_logo} alt="logo" className="w-40 my-5 object-cover" />
          </Link>
        </div>

        <div className="flex itms-center justify-content-center space-x-4">
          <Link to="/login">Log In</Link>
          <Link to="/register">Sign Up</Link>
          <Link to="/cart">
            <img src={cartIcon} alt="cart" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
