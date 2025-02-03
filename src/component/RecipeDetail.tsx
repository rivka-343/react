import { useParams } from "react-router-dom";
import recipeStore from "./RecipeStore";
import './RecipeList.css';
const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = recipeStore.recipes.find((r) => r.id === parseInt(id || '-1'));
    if (!recipe) {
        return <div>Recipe not found</div>;
    }
    return (
        <div className="recipe-detail">
            <h3>{recipe.title}</h3>
            <ul>
                <li><strong>Description: </strong> {recipe.description}</li>
                <li>
                    <strong>Ingredients: </strong>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </li>
                <li><strong>Instructions: </strong>{recipe.ingredients}</li>
            </ul>
        </div>
    );
};
export default RecipeDetail;
