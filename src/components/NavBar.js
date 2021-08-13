import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <NavLink to="/home">Home</NavLink><br/>
                <NavLink to="/takes/new">Create HotTakes</NavLink><br/>
                <NavLink to="/takes">List HotTakes</NavLink><br/>
            </ul>
        </nav>
    )
}

export default NavBar