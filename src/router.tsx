import { createBrowserRouter } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/home";
import AppLayout from "./component/AppLayout";
export const router = createBrowserRouter([
    {
        path: '/', element: <AppLayout />,
        errorElement:<h1>error</h1>,
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element:        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , width: '100vw'}}>
            <h1>About</h1>
          </div> }
        ]
    }
])