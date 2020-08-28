import React from "react";
import "../../css/MainPage/Header.css"
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__heading"><span className="header__heading--special">Keto</span>Przepis</h1>
      </Link>
    </div>
  )
}

export default Header;