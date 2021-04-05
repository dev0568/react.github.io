import React from 'react';
import './index.css';

function Header(){
    return <>
    <div className="header">
            <ul>
                <li><b>RAZORPAY</b></li>
                <li>Products</li>
                <li>Develop</li>
                <li>Resources</li>
                <li>Support</li>
                <li>Pricing</li>
            </ul>
            <div className="right">
                <a>We're hiring</a>
                <li>LogIn</li>
                <button className="sign_up">Sign Up</button>
                
            </div>
        </div>
    </>
};
export default Header;