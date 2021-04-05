import React from 'react';
import './index.css';
import Image from './assets/banner_img2.png';

function Power_finance(){
    return <>
            
        <div className="first_blog">
            <div className="banner">
                <h2>Power your finance, grow your business</h2>
                <p>Accept payments from customers. Automate paouts to vendors & employees. Never run out of working capital.</p>
                <button type="submit" className="signup_now">Sign Up Now</button>
            </div>
            <div className="banner_image2">
                <img src={Image} alt="Logo" />
            </div>
        </div>
    </>
}
export default Power_finance;