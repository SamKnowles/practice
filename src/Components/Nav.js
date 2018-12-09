import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav-container'>
            <NavLink exact className='nav-item' activeClassName="selcted" to='/'>Calling Hands</NavLink>
            <NavLink className='nav-item' activeClassName="selcted" to='/table'>Table</NavLink>
        </div>
    )
}

export default Nav
