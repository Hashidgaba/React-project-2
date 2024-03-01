import React from 'react'
import './Header.css'
import { Outlet, NavLink } from "react-router-dom";
export default function Header() {
    let margin = {
        margin: '10px '
    }
    let obj = {
        margin: '16px',
        fontWeight: 'bolder',
        fontStyle: 'italic',
        fontSize: '3rem',
        textShadow: '4px 2px brown'

    }
    return (
        <div className='Header'>
            <div className='flex flex-1'>
                <h2 style={obj} className='scale'>TIME COLLEGIATE</h2>
                <div style={{ width: '35vw', margin: '40px' }} className='flex'>
                    <div className='mobile'>
                        <i style={margin} class="fa-solid fa-phone gray"></i>
                        <a className='color-2'>033333333333</a>
                    </div>
                    <div className='login'>
                        <i style={margin} class="fa-solid fa-user gray"></i>
                        <a className='color-2' href='#'>parents Login</a>
                    </div>
                    <div className='social-links flex' style={{ width: '10vw' }}>
                        <a href='#'><i style={margin} class="fa-brands fa-facebook background"></i></a>
                        <a href='#'><i style={margin} class="fa-brands fa-twitter background"></i></a>
                        <a href='#'><i style={margin} class="fa-brands fa-linkedin background"></i></a>
                    </div>
                </div>
            </div>
            <nav className='flex'>
                <ul>
                    <li style={margin} ><NavLink className= {(e) => {return e.isActive?'active' : ""}}  to='/'>Home</NavLink></li>
                    <li style={margin} ><NavLink   to='/administration'>Administration</NavLink></li>
                    <li style={margin}><NavLink    to='/admission'>Admission</NavLink></li>
                    <li style={margin}><NavLink    to='/contact'>contact</NavLink></li>
                </ul>
                <NavLink to='https://www.google.com' target='blank'><i style={{ margin: '0px 10rem' }} class="fa-solid fa-magnifying-glass color-1"></i></NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
