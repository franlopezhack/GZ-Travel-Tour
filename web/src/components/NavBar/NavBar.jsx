import React from 'react'
import './NavBar.css'

function NavBar () {
  return (
    <>
      <nav className='nav-bar'>
        <ul  className='d-flex justify-content-between ul-link'>
          <li className='link  align-items-center justify-content-center'>  GALICIA</li>
          <li className='link align-items-center justify-content-center'>A CORUÑA</li>
          <li className='link align-items-center justify-content-center'>LUGO</li>
          <li className='link align-items-center justify-content-center'>OURENSE</li>
          <li className='link align-items-center justify-content-center'>PONTEVEDRA</li>
        </ul>
      </nav>
    </>
    )
}



export default NavBar