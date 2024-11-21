import React, { useState } from 'react'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'
import AddRecipe from './AddRecipe'


const data = [
 {
  name: "Baked Parmesan Chicken",
  ingredients: [
    "olive oil",
    "garlic clove",
    "bread crumbs",
    "dried basil leaves",
    "skinless boneless chicken breast",
  ],
  directions: [
    "Preheat the oven to 350 degrees. Lightly grease a 9x13 inch baking sheet.",
    "In a bowl, blend the olive oil and garlic.",
    "In a separate bowl, mix the crumbs, Parmesan cheese, basil, and pepper.",
    "Dip each chicken breast in the oil mixture, then in the bread crumb mixture. Arrange the coated chicken breasts in the prepared baking dish, and top with any remaining bread crumb mixture.",
    "Bake 30 minutes in the preheated oven, or until chicken is no longer pink and juices run clear.",
    "Serve hot and enjoy!",
  ],
},
{
  name: "Spaghetti Bolognese",
  ingredients: [
    "spaghetti",
    "ground beef",
    "tomato sauce",
    "onion",
    "garlic",
    "beef",
  ],
  directions: [
    "Cook the spaghetti",
    "Brown the ground beef",
    "Add tomato sauce",
    "Mix everything together",
  ],
},
{
  name: "Teriyaki Chicken",
  ingredients: [
    "canola oil",
    "chicken",
    "soy sauce",
    "garlic",
    "brown sugar",
    "honey",
    "rice vinegar",
    "sesame oil",
    "cornstarch",
    "green onions",
    "sesame seeds",
  ],
  directions: [
    "Heat the canola oil in a large skillet and cook the chicken until lightly browned.",
    "Make the sauce by combining soy sauce, brown sugar, minced garlic, honey, rice vinegar, sesame oil, grated ginger, black pepper, and salt.",
    "Bring the sauce to a simmer.",
    "Combine the chicken and sauce, stirring until well coated.",
    "Serve the teriyaki chicken with rice or vegetables.",
  ],
  
},
]


const App = () => {
  const [recipes, setRecipes] = useState(data);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addRecipe = (newRecipe) => {
    setRecipes((initialRecipes) => [...initialRecipes, newRecipe]);
  };

  return (
    <div>
      <h1>Recipe Tracker</h1>
      <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
      <AddRecipe onAddRecipe={addRecipe} />
    </div>
  );
};

export default App;
