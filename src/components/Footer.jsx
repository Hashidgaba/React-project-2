import React from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='left-footer'>
        <p>© 2015 All rights reserved. Powered by Kreative Worx</p>
      </div>
      <div className='right-footer' >
        <NavLink className= {(e) => {return e.isActive?'active' : ""}} to='/contact'>contact</NavLink>
        <NavLink className= {(e) => {return e.isActive?'active' : ""}} to='/admission'>admission</NavLink>
      </div>
    </div>
  )
}
