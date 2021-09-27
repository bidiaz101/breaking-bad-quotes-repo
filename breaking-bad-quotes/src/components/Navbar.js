import React from "react"
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav id="navbar">
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/episodes">Episodes</NavLink>
            <NavLink to="/quotes">Quotes</NavLink>
            <NavLink to="/deaths">Deaths</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </nav>
    )
}

export default Navbar