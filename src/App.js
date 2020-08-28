import React from 'react';
import './App.css';
import Header from "./components/MainPge/Header";
import Button from "./components/MainPge/Button";
import RecipeContainer from "./components/MainPge/RecipeContainer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SingleRecipe from "./components/SingleRecipePage/SingleRecipe";
import BackButton from "./components/AddRecipePage/BackButton";
import AddRecipePlace from "./components/AddRecipePage/AddRecipePlace";
import AddedRecipePage from "./components/AddedRecipePage.js/AddedRecipePage";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/add-recipe">
            <div className="App__page">
              <BackButton/>
              <AddRecipePlace/>
            </div>
          </Route>
          <Route path="/" exact>
            <div className="App__page">
              <Button/>
              <RecipeContainer/>
            </div>
          </Route>
          <Route path="/single-recipe" exact>
            <div className="App__page">
              <SingleRecipe/>
            </div>
          </Route>
          <Route path="/added-recipe" exact>
            <div className="App__page">
              <AddedRecipePage/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
