import React from 'react';
import logo from './logo.svg';
import './App.css';

import { RecipeTitle } from './components/RecipeTitle';
import { IngredientList } from './components/IngredientList';
import { PrepareRecipe } from './components/PrepareRecipe';

const receita = {
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
  preparo: [
    {passo: 'Adicione as batatas cortadas a uma panela com água e sal.'},
    {passo: 'Leve a panela para ferver.'},
    {passo: 'Ferva as batatas até ficarem macias, por cerca de 15 a 20 minutos.'},
    {passo: 'Coe as batatas'},
    {passo: 'Coloque-as novamente na panela.'},
    {passo: 'Adicione a manteiga, o creme de leite, o sal e a pimenta a gosto.'},
    {passo: 'Amasse as batatas.'},
    {passo: 'Tempere novamente e adicione a manteiga e o creme de leite conforme desejado.'}
  ]
}

function App() {
  const numeros = [2,3,10]
  
  const numeroX2 = numeros.map((numero, index) => {
    console.log(`Processing item ${index + 1}`);
    return <div key={index}>{ numero * numero }</div>
  });

  console.log(
    numeroX2
  )
return (
  <div className="App">
    <header className="App-header">
      <RecipeTitle title={ receita.title } feedback={receita.feedback} />
      <IngredientList ingredients={receita.ingredients} />
      <PrepareRecipe preparo={receita.preparo} />
    </header>
  </div>
);
}

export default App;
