import { Link, Outlet } from "react-router"
const NavBar = () => {
    return (
        <>
            <div style={{ position: 'fixed', top: 0, right: 0, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <nav style={{ padding: '10px', backgroundColor: 'white' }}>
                <Link to='/' style={{ margin: '0 10px' }}>Home</Link>
                <Link to='/about' style={{ margin: '0 10px' }}>About</Link>
            </nav>
        </div>
        </>
    )

}

export default NavBar