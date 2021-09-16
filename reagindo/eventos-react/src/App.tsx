import React, { useEffect, useState } from 'react';
import './App.css';
import { Demo } from './components/Demo';
import { IngredientList } from './components/IngredientList';

import { RecipeTitle } from './components/RecipeTitle';

function App() {

  const initialRecipe = {
    title: 'Purê de batata',
    feedback: {
      rating: 4.8,
      reviews: 20
    },
    ingredients: [
      { name: '3 batatas, cortadas em pedaços de 1/2 ', prepared: false },
      { name: '4 colheres de sopa de manteiga', prepared: false },
      { name: '1/8 xícara de creme de leite', prepared: false },
      { name: 'Sal', prepared: true },
      { name: 'Pimenta', prepared: true },
    ],
  }

  const [recipe, setRecipe] = useState(initialRecipe)
  const [prepared, setPrepared] = useState(false)

  // TODO: Create recipe state

  // TODO: Add new state property

  // TODO: Create ingredientClick event listener
  function ingredientClick(index: number) {
    const updateRecipe = { ...recipe }
    updateRecipe.ingredients[index].prepared = !updateRecipe.ingredients[index].prepared;
    setRecipe(updateRecipe)
  }

  // TODO: Add the effect hook
  useEffect(() => {
    setPrepared(recipe.ingredients.every(i => i.prepared))
  }, [recipe])

  return (
    <div className="App">
      <Demo></Demo>
      <header className="App-header">
        <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
        <IngredientList ingredients={recipe.ingredients} onClick={ingredientClick} />
        {/* TODO: Add the prep work display */}
        {prepared ? <h2>Trabalho de preparação feito!</h2> : <h2>Apenas continue cortando.</h2>}
      </header>
    </div>
  );
}

export default App;
