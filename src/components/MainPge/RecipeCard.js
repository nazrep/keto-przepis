import React from "react";
import "../../css/MainPage/RecipeCard.css";
import {Link} from "react-router-dom";


const RecipeCard = ({image, calories, heading, description, rating}) => {
  return (
    <div className="recipeCard">
      <Link to="/single-recipe">
        <img className="recipeCard__img"
             src={image}
             alt=""/>
      </Link>
      <div className="recipeCard__rating">
        <p className="recipeCard__calories">{calories}</p>
        <img className="recipeCard__rating--icon" src="https://image.flaticon.com/icons/svg/1828/1828961.svg"
             alt="rate-icon"/>
        <p>{rating}</p>
      </div>
      <h3 className="recipeCard__title">{heading}</h3>
      <p className="recipeCard__description">
        {description}
      </p>
    </div>
  )
};

export default RecipeCard;