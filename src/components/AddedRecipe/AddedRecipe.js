import React from "react";
import "../../css/AddedRecipe/AddedRecipe.css";
import {Link} from "react-router-dom";


const AddedRecipe = () => {
  return (
    <div className="addedRecipe">
      <h2 className="addedRecipe__heading">Super! Przepis został pomyślnie dodany.
        W tej chwili oczekuje na potwierdzenie przez administratora.</h2>
      <Link to="/">
        <button className="addedRecipe__button"><span className="addedRecipe__button--special">Wróć</span> do listy</button>
      </Link>
    </div>
  )
}

export default AddedRecipe;