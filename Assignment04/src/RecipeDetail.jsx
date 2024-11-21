import React from 'react'

const RecipeDetail = ({ recipe }) => {


  return (
    <div className="recipe-item">
      <h2>{recipe.name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.directions.map((steps, index) => (
          <li key={index}>{steps}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;