import React, { useState } from "react";

export default function AddRecipe ({ onAddRecipe }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleAddRecipe = () => {
    if (name && ingredients && steps) {
      const newRecipe = {
        name,
        ingredients: ingredients.split(",").map((item) => item.trim()),
        directions: steps.split("\n").map((step) => step.trim()),
      };
      onAddRecipe(newRecipe);
      setName("");
      setIngredients("");
      setSteps("");
    } else {
      alert("Please fill in all fields before adding a recipe.");
    }
  };

  return (
    <div>
      <h2>Add a Recipe</h2>
      <div>
        <label>Recipe Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Ingredients</label>
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <div>
        <label>Steps</label>
        <textarea
          placeholder="Steps (one per line)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
      </div>
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  )
}

