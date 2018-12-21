import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <nav className='NavBar'>
            <NavLink exact to="/" className='NavBar-link' activeClassName="selected">Home</NavLink>{' '}
            <NavLink to='/projects' className='NavBar-link'>Projects</NavLink>{' '}
            <NavLink to='/experience' className='NavBar-link'>Experience</NavLink>{' '}
            <NavLink to='/skills' className='NavBar-link'>Skills</NavLink>{' '}
        </nav>
        </div>
    );
}

export default NavBar;
