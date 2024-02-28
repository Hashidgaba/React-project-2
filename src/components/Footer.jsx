import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='left-footer'>
        <p>© 2015 All rights reserved. Powered by Kreative Worx</p>
      </div>
      <div className='right-footer' >
        <Link className='color' to='/contact'>contact</Link>
        <Link className='color' to='/admission'>admission</Link>
      </div>
    </div>
  )
}
