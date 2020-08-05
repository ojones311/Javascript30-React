import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link to= "/">Home</Link>{" "}
            <Link to='/drum_machine'>Drum Machine</Link>
        </div>
    )
}


export default NavBar