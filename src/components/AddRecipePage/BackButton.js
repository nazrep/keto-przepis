import React from "react";
import {Link} from "react-router-dom";
import "../../css/AddRecipePage/BackButton.css";

const BackButton = ()=>{
  return(
    <div className="backButton">
      <Link to="/">
        <button className="backButton__button"><span className="backButton__special">Wróć </span> do listy przepisów</button>
      </Link>
    </div>
  )
}

export default BackButton;