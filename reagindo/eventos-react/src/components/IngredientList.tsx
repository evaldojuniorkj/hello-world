import './IngredientList.css'
import React from 'react';

type IngredientProps = {
    ingredients: {
        name: string,
        prepared: boolean,
    }[]
}


export function IngredientList(props: IngredientProps) {
    // Criando os itens da lista usando a função map
    const ingredientListItems = props.ingredients.map((ingredient, index) => {
        return (
            <li key={index} className={ingredient.prepared ? 'prepared' : ''}>
                {ingredient.name}
            </li>
        )
    })

    return (
        <div>
            <h3>Ingredientes</h3>
            <ul>
                {ingredientListItems}
            </ul>
        </div>
    )
}





