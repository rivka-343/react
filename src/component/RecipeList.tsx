import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import recipeStore from './RecipeStore';
import './RecipeList.css'; 

const RecipeList = observer(() => {
    useEffect(() => {
        recipeStore.fetchRecipes(); 
    }, []);
    return (
        <div className="recipe-list-container">
            <div className="recipe-content">
                <Outlet />
            </div>
            <div className="recipe-nav">
                <h2>Recipe list</h2>
                <ul className="recipe-list" dir="rtl">
                    {recipeStore.recipes.map((recipe, index) => (
                        <li key={index} className="recipe-item">
                            <Link to={`/recipes/${recipe.id}`} className="recipe-link">
                                {recipe.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default RecipeList;
