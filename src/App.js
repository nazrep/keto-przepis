import React from 'react';
import './App.css';
import Header from "./components/Header";
import Button from "./components/Button";
import RecipeContainer from "./components/RecipeContainer";



const App = () => {
  return (
    <div className="App">
      <Header/>
      <Button/>
      <RecipeContainer/>
    </div>
  );
}

export default App;
