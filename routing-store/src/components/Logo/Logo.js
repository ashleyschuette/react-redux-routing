import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export default function Welcome(props) {
    return (
        <div className='logo-wrapper'>
            <img
                className='logo'  
                src="http://www.huntlogo.com/wp-content/uploads/2012/03/Trader-Joes-logo.png" 
                alt=""/>
            <Link to='/shop'>
                <button className='btn btn-default btn-lg'>Shop</button>
            </Link>    
        </div> 
    )
}