import React from 'react'
import { Link } from "react-router-dom";

export default function SideNavBar() {
    return (
        <div className='navbar'>
            <img className='logo' src='./images/hogwartLogo.png'/>
            <Link to='/' className='navbar-link'>Student Catalog</Link>
            <Link to='/book-details' className='navbar-link'>Dashboard</Link>

        </div>
    )
}
