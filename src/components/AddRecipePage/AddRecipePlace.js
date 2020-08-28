import React from "react";
import "../../css/AddRecipePage/AddRecipePlace.css";
import {Link} from "react-router-dom";


const AddRecipePlace = () => {
  return (
    <div className="addRecipePlace">
      <form action="">
        <input placeholder="Nazwa twojego przepisu" type="text" className="addRecipePlace__title"/>
        <textarea placeholder="Składniki" type="text" className="addRecipePlace__ingredients"/>
        <textarea placeholder="Sposób przygotowania" type="text" className="addRecipePlace__preparing"/>
        <div className="addRecipePlace__macro">
          <input placeholder="Kalorie" type="text" className="addRecipePlace__calories"/>
          <input placeholder="Białko" type="text" className="addRecipePlace__macronutrient"/>
          <input placeholder="Tłuszcze" type="text" className="addRecipePlace__macronutrient"/>
          <input placeholder="Węglowodany" type="text" className="addRecipePlace__macronutrient"/>
          <button className="addRecipePlace__addImage">Dodaj Zdjęcie 📷</button>
        </div>
        <div className="addRecipePlace__addRecipe">
          <Link to="/added-recipe">
            <button className="addRecipePlace__addRecipe--button"><span>Dodaj</span> Przepis</button>
          </Link>
        </div>
      </form>
    </div>
  )
}
export default AddRecipePlace;