import React from 'react';
import './index.css';
import icon from './assets/accept-payments-icon.png';

function Paymentcards() {
    return<>
        <div className="card">
            <img className="icon" src={icon} />
            <h1>Razorpay  Payments</h1>
            <p class="price">Accept Payments using Payment Gateway, Payment Pages, Payment Links and much more.</p>
            <a className="learn_more">Learn more</a>
        </div>
    </>
};
export default Paymentcards;