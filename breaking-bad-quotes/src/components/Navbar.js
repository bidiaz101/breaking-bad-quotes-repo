import React from "react"
import {BrowserRouter as Router, NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav id="navbar">
            <Router>
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/episodes">Episodes</NavLink>
                <NavLink to="/quotes">Quotes</NavLink>
                <NavLink to="/deaths">Deaths</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
            </Router>
        </nav>
    )
}

export default Navbar