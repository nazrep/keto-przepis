import React from "react";
import "../css/RecipeCard.css";

const RecipeCard = ({image, calories, heading, description, rating}) => {
  return (
    <div className="recipeCard">
      <img className="recipeCard__img"
           src={image}
           alt="karkówka z grila"/>
      <p className="recipeCard__calories">{calories}</p>
      <h3 className="recipeCard__title">{heading}</h3>
      <p className="recipeCard__description">
        {description}
      </p>
      <div className="recipeCard__rating">
        <img className="recipeCard__rating--icon" src="https://image.flaticon.com/icons/svg/1828/1828961.svg"alt="rate-icon"/>
        <p>{rating}</p>
      </div>
    </div>
  )
};

export default RecipeCard;