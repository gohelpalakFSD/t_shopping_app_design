import React, { useState } from 'react'
import './Header.css'

function Header() {
    let [ham, setham] = useState(false)
  return (
    <>
      <header>
        <div className="container">
            <div className="navbar">
                <nav>
                    <ul className= {`nav-items ${ham==true ?"active" :"nav-items"}`}>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                    </ul>
                </nav>
                <div className='icon'>
                    <button onClick={()=>{setham(ham==false)}}>&#9776;</button>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header