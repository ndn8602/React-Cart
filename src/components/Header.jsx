import React from "react";
import "./Header.css";
const Header = (props) => {
  const { countCartItems } = props;
  return (
    <div>
      <header className="row block center">
        <div className="">
          <a href="#/">
            <h1>Shopping Cart</h1>
          </a>
        </div>
        <div className="">
          <a href="#/cart">
            Cart{" "}
            {countCartItems ? (
              <button className="badge">{countCartItems}</button>
            ) : (
              ""
            )}
          </a>
          <a href="#/signin">SignIn</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
