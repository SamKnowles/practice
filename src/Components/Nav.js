import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav-container'>
            <NavLink exact className='nav-item' activeClassName="selcted" to='/'>Table</NavLink>
            <NavLink className='nav-item' activeClassName="selcted" to='/landing'>Landing</NavLink>
            <NavLink className='nav-item' activeClassName="selcted" to='/preflop'>Pre-Flop</NavLink>
            <NavLink className='nav-item' activeClassName="selcted" to='/maths'>Maths</NavLink>
        </div>
    )
}

export default Nav
