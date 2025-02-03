import { createBrowserRouter } from "react-router-dom";
import Home from "./component/home";
import AppLayout from "./component/AppLayout";
import RecipeList from "./component/RecipeList";
import RecipeDetail from "./component/RecipeDetail";
import { UserProvider } from "./type";
import AddRecipe from "./component/AddRecipe";
import About from "./component/About";
export const router = createBrowserRouter([
    {
        path: '/', element:
        <UserProvider>
            <AppLayout />
        </UserProvider>,
        errorElement: <h1>error</h1>,
        children: [
            { path: '/', element: 
                <Home />
             },
            {
                path: 'about', element:<About/> 
            },
            {
                path: 'recipes', 
                element: 
                 <RecipeList />,
                children: [
                    { path: ':id', element: <RecipeDetail /> }
                ]
            },{
                path: 'add-recipe', element: <AddRecipe />
            }
        ]
    }
])