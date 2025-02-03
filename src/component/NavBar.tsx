import { Link } from "react-router"
import { useContext } from "react";
import { UserContext } from "../type";
import Button from '@mui/material/Button';
const NavBar = () => {
    const {user} = useContext(UserContext);
    return (
                <nav style={{ padding: '10px' }}>
                 {user && ( <Button sx={{ marginRight: 2 }} color="inherit"  variant="contained"><Link to='/add-recipe' style={{ margin: '0 10px' }}>Add Recipe</Link></Button>)}
                 <Button sx={{ marginRight: 2}} color="inherit"  variant="contained">    <Link to='/recipes' style={{ margin: '0 10px' }}>Recipes</Link></Button>
                 <Button sx={{ marginRight: 2 }} color="inherit"  variant="contained">  <Link to='/about' style={{ margin: '0 10px' }}>About</Link></Button>
                 <Button color="inherit"  variant="contained"> <Link to='/' >Home</Link></Button>
                </nav>
    )
}
export default NavBar