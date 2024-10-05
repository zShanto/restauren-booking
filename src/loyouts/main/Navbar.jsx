
// import React from 'react';
import logo from "../../assets/logo.png"


const Navbar = () => {
    return (
        <nav className='flex items-center justify-between container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='flex items-center gap-10 text-xl'>
                <li>Home</li>
                <li>Book A Table</li>
                <li>Foods</li>
                <li>Donwload App</li>
                <li>My Profile</li>
            </ul>
        </nav>
    );
}

export default Navbar;
