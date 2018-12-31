import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className='nav-container'>
                <NavLink exact className='nav-item' activeClassName="selected" to='/'>Calling Hands</NavLink>
                <NavLink className='nav-item' activeClassName='selected' to='/preflop'>Pre-Flop</NavLink>
                <NavLink className='nav-item' activeClassName="selcted" to='/table'>Table</NavLink>
            </div>
            <div className='magicButton'>WORDS</div>
        </div>
    )
}

export default Nav
