import React from 'react'
import "./AceCoinPay.css"
// import chipImg from "../assets/chip.png";
// import wifiImg from "../assets/wifi.png";
// import mcSymbol from "../assets/mc_symbol.svg";
// import verifiedBadge from "../assets/verified-badge.svg";
// import dotsImg from "../assets/dots.svg";
// import appleLogo from "../assets/apple-13.svg";
// import mastercardLogo from "../assets/mastercard-2.svg";
// import docketImg from "../assets/docket.png";

const AceCoinPay = () => {
  return (
    <div className="wrapper grid grid-cols-12">
      <div className="close-btn">&times;</div>
      <div className="col-span-12 md:col-span-8">
        <div className="form">
          <header className="form-header">
            <div className="logo">
              <span className="logo-circle"></span>
              <h1>AceCoin<span className="lean">Pay</span></h1>
            </div>
            <div className="timer">01:19</div>
          </header>
          <section className="form-body">
            <form>
              <div className="input-group">
                <div className="header">
                  <h2 className="title">Card Number</h2>
                  <p className="desc">Enter the 15-digit card number on the card</p>
                </div>
                <div className="main">
                  <img src={mcSymbol} alt="" className="leading-icon" />
                  <input type="text" placeholder="2412 - 7512 - 3412 - 3456" />
                  <img src={verifiedBadge} alt="" className="trailing-icon" />
                </div>
              </div>
              <div className="input-group __col">
                <h2 className="title">CVV Number</h2>
                <p className="desc">Enter the 3 or 4 digit number on the card</p>
                <div className="main">
                  <input type="text" placeholder="327" />
                  <img src={dotsImg} alt="" className="trailing-icon" />
                </div>
              </div>
              <div className="input-group __col">
                <h2 className="title">Expiry Date</h2>
                <p className="desc">Enter the expiration date of the card</p>
                <div className="grp">
                  <input type="text" placeholder="09" className="__date" />
                  <span className="divider">/</span>
                  <input type="text" placeholder="22" className="__date" />
                </div>
              </div>
              <div className="input-group __col">
                <h2 className="title">Password</h2>
                <p className="desc">Enter your Dynamic password</p>
                <div className="main">
                  <input type="password" placeholder="******" />
                  <img src={dotsImg} alt="" className="trailing-icon" />
                </div>
              </div>
              <button type="submit" className="btn-submit">Pay Now</button>
            </form>
          </section>
        </div>
      </div>
      <div className="col-span-12 md:col-span-4">
        <div className="checkout">
          <div className="credit-card">
            <div className="credit-card__head">
              <img src={chipImg} alt="" className="chip" />
              <img src={wifiImg} alt="" className="wifi" />
            </div>
            <div className="credit-card__body">
              <span className="holder">Jonathan Michael</span>
              <div className="card-digits">**** **** **** 3456</div>
            </div>
            <div className="credit-card__footer">
              <span className="expiry">09/22</span>
              <img src={mastercardLogo} alt="" className="logo" />
            </div>
          </div>
          <div className="checkout-details">
            <div className="purchase-data">
              <div className="data">
                <span className="title">Company</span>
                <span className="value">
                  <img src={appleLogo} alt="" />
                  <span>Apple</span>
                </span>
              </div>
              <div className="data">
                <span className="title">Order Number</span>
                <span className="value">1266201</span>
              </div>
              <div className="data">
                <span className="title">Product</span>
                <span className="value">MacBook Air</span>
              </div>
              <div className="data">
                <span className="title">VAT (20%)</span>
                <span className="value">$100.00</span>
              </div>
            </div>
            <div className="purchase-total">
              <h1 className="amount">549<sub>.99</sub> USD</h1>
              <img src={docketImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AceCoinPay