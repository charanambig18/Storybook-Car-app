import React from 'react';
import './AceCoinPay.css';

import AceCoinlogo from "./images/Acecoin-logo.png"
import pencil from "./images/pencil.png"
import mcSymbol from "./images/masterCard-Logo.png"
import verifiedBadge from "./images/verified.png"
// import dotsImg from "./images/dots-menu.png"
import chipImg from "./images/chip.png";
import wifiImg from "./images/wifi.png";
import mastercardLogo from "./images/mastercard.png"
import appleLogo from "./images/apple.png"
import docketImg from "./images/docket.png"


const Example = () => {
  return (
    <div className="wrapper">
      <div className="form">

      <div className="close-btn">
        <img src={AceCoinlogo} alt="Close Icon" />
      </div>
      
        <div className="form-header">
          <div className="logo">
            <div className="logo-circle" />
            <h1>
              Ace<span className="lean">Coin</span>
            </h1>
          </div>
          <div className="timer">
            <span className="timer-box">0</span>
            <span className="timer-box">1</span>
            <span className="timer-divider">:</span>
            <span className="timer-box">1</span>
            <span className="timer-box">9</span>
          </div>
        </div>

        <div className="form-body">
          <form>
            <div className="input-group">
              <div className="header">
                <div className="description">
                  <div className="title">Card Number</div>
                  <div className="desc">Enter the 16-digit card number on the card</div>
                </div>
                <button className="edit">
                  <img src={pencil} alt="Edit Icon" />
                  <span className="btn-desc">Edit</span>
                </button>
              </div>
              <div className="main">
                <img src={mcSymbol} alt="Card Leading Icon" className="leading-icon" />
                <input type="text" placeholder="2414-7512-4312-3456" />
                <img src={verifiedBadge} alt="Card Trailing Icon" className="trailing-icon" />
              </div>
            </div>

            <div className="input-group">
              <div className="header">
                <div className="description">
                  <div className="title">CVV Number</div>
                  <div className="desc">Enter the 3 or 4 digit number on the card</div>
                </div>
              </div>
              <div className="main">
                <input type="password" placeholder="327" />
              </div>
            </div>

            <div className="input-group__col">
              <div className="header">
                <div className="description">
                  <div className="title">Expiry Date</div>
                  <div className="desc">Enter the expiration date of the card</div>
                </div>
              </div>
              <div className="dates">
              <div className="main __date">
                <input type="text" placeholder="MM" />
              </div>
              <div className="divider">/</div>
              <div className="main __date">
                <input type="text" placeholder="YY" />
              </div>
              </div>
            </div>

            <div className="input-group">
              <div className="header">
                <div className="description">
                  <div className="title">Password</div>
                  <div className="desc">Enter your dynamic password</div>
                </div>
              </div>
              <div className="main">
                <input type="password" placeholder="Password" />
              </div>
            </div>

            <button type="submit" className="btn-submit">Pay Now</button>
          </form>
        </div>
      </div>

      <div className="checkout">
        <div className="credit-card">
          <div className="credit-card__head">
            <img src={chipImg} alt="Card Logo" />
            <img src={wifiImg} alt="Card Chip" className="chip" />
          </div>
          <div className="credit-card__body">
            <span className="holder">Card Holder</span>
            <div className="card-digits">
              <div className="hidden-digits">
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
              </div>
              <span className="visible-digits">1234</span>
            </div>
            <div className="credit-card__footer">
              <span className="expiry">09/24</span>
              <img src={mastercardLogo} alt="Visa Logo" className="logo" />
            </div>
          </div>
          <div className="card__design">
            <div className="inner" />
          </div>
        </div>

        <div className="checkout-details">
          <div className="purchase-data">
            <div className="data">
              <span className="title">Company</span>
              <div className="value">
                <img src={appleLogo} alt="Apple Logo" />
                <span className="inner-text">Apple</span>
              </div>
            </div>
            <div className="data">
              <span className="title">Order Number</span>
              <span className="inner-text">123456</span>
            </div>
            <div className="data">
              <span className="title">Product</span>
              <span className="inner-text">MacBook Air</span>
            </div>
            <div className="data">
              <span className="title">VAT</span>
              <span className="inner-text">$100.00</span>
            </div>
          </div>
          <div className="divider">
            <div className="left" />
            <div className="right" />
          </div>
          <div className="purchase-total">
            <div className="total">
              <span className="desc">Total</span>
              <div className="t-amount">
                <span className="amount">$1200</span>
                <sub>USD</sub>
              </div>
            </div>
            <img src={docketImg} alt="Card Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
