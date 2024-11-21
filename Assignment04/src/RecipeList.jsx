import RecipeDetail from './RecipeDetail'

export default function RecipeList ({ recipes, onSelectRecipe }) {
  return (
    <div>
      <h2>My List of Recipes</h2>
      <ol className="recipe-list">
        {recipes.map((recipe, index) => (
          <li className = "recipe-item"
            key={index}
            onClick={() => onSelectRecipe(recipe)}
          >
            {recipe.name}
          </li>
        ))}
      </ol>
    </div>
  )
}

