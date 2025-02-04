import {  makeAutoObservable } from 'mobx';
import { Recipe } from '../Recipe';
class RecipeStore {
    recipes: Recipe[] =[] ;
    constructor() { makeAutoObservable(this);}
    async fetchRecipes() {
        const response = await fetch('http://localhost:3000/api/recipes/');
        const data = await response.json();
        this.recipes = data;
    }
    async addRecipe(newRecipe :Recipe) {
            const response = await fetch('http://localhost:3000/api/recipes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'user-id': newRecipe.authorId.toString()
            },
            body: JSON.stringify(newRecipe),            
        });
        if (response.ok) {
            this.recipes.push(newRecipe);
        } 
        else{
            if (response.status === 403) {
                throw new Error( 'You do not have permission to add this recipe.');
            } else {
                throw new Error( 'An error occurred while adding the recipe.');
            }
            
        }
    }
}
export default new RecipeStore();
        