import React from "react";
import "../../css/MainPage/Button.css";
import {Link} from "react-router-dom";


const Button = () => {
  return (
    <div className="button">
      <Link to="/add-recipe">
        <button className="buttonAddRecipe"><span>Dodaj</span> Przepis</button>
      </Link>
    </div>
  )
}

export default Button;