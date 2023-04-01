import React from 'react';
import './Header.css';
import logo from '../../images/handsome-programmer-working-with-laptop_176420-21105.avif';
const Header = () => {
    return (
        <div className='header'>
            <h1>Knowledge Cafe</h1>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;