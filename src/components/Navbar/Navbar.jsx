import { Link } from 'react-router-dom';
import cart_icon from '../assets/cart_icon.png'
import logo from '../assets/ecommerce2.png' 
import './Navbar.css'
import React, { useState } from 'react';


const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='nav-bar'>
        <div className="nav-logo">
        <img src="src/components/assets/ecommerce2.png" alt="logo"/>
        <p>Tropify</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("about")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/about'>About</Link>{menu==="about"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("explore")}}><Link style={{ textDecoration: 'none', color: 'black'}} to='/explore'>Explore</Link>{menu==="explore"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar