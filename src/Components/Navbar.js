import React from 'react'
import {Link} from 'react-router-dom'
import userprofile from '../Components/Assets/userprofile.png'
import cartlogo from '../Components/Assets/cartlogo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <Link to='/Home'><button>Home</button></Link>
        <Link to='/Signup'><button>Register</button></Link>
        <Link to='/Login'><button>Login</button></Link>
        <Link to='/cartlogo'>
            <img src={cartlogo} className="cart-button"  alt={"user"}/>
        </Link>
            <span className='cart-icon'>0</span>
        <Link to='/userprofile'>
            <img src={userprofile} className="userprofile"  alt={"user"}/>
        </Link>
    </nav>
  )
}

export default Navbar
