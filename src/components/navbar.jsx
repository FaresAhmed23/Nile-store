import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ cartItemsCount, isLogged }) => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className="nav-cont-1">
        <h2 className="nav-h2" onClick={() => navigate('/')}>
          Nile <span style={{ fontWeight: "400" }}>store</span>
        </h2>
        <ul className="nav-ul">
          <Link to="/products" className="about-span">Products</Link>
          <Link className="about-span" to="/">Shop</Link>
        </ul>
        <div className="nav-cont-2">
        {!isLogged && <button className="login-nav" onClick={() => navigate('/login')}>Login</button>}
        <Link to="/cart" className="cart-icon-cont">
          <span className="nav-cart-count">{cartItemsCount}</span>
          <HiShoppingCart
            size={25}
            style={{
              marginRight: "10px",
              marginLeft: "15px",
              marginBottom: "-5px",
            }}
          />
        </Link>
      </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
