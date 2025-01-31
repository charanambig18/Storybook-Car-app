import React from "react";
import "./menu.css";
import biscuit from "./images/Biscuit_Susu.png";
import krosang from "./images/Krosang.png";
import strawberry from "./images/Strawberry.png";
import healthy from "./images/S_Kids_Meal.png";
import mango from "./images/Mangoo_Milk.png";
import smoothie from "./images/Smoothie_Berry.png";
import rainbow from "./images/Rainbow_Cupcake.png";
import mie from "./images/Mie_Gocengan.png";
import filter from "./images/Filter.png";
import minus from "./images/Minus.png";
import plus from "./images/Plus.png";

const menu = () => {
  return (
    <div className="container">
      <div className="food-heading">
        <h1>Explore Our Best Menu</h1>
        <p>View All</p>
      </div>
      <div className="categories">
        <button className="active">All</button>
        <button>Main Course</button>
        <button>Appetizer</button>
        <button>Dessert</button>
        <button>Side Dishes</button>
        <button>Beverages</button>
        <button>Kids</button>
        <div className="filter-image">
          <div className="image">
            <img src={filter} alt="" />
          </div>
          <button className="filter">Filter</button>
        </div>
      </div>

      <div className="menu-grid">
        <div className="menu-item">
          <img src={biscuit} alt="Biscuit Mama with Susu" />
          <h2>Biscuit Mama with Susu</h2>
          <div className="food-order">
            <div className="food-price">
          <p>Price per portion</p>
          <h2> Rp 60.000,00</h2>
          </div>
          <div className="order">
            <button>Order</button>
          </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={krosang} alt="Krosang Thats It" />
          <h2>Krosang Thats It</h2>

          <div className="foods">
            <div className="food-rate">
          <p>Price per portion </p>
          <h2>Rp 78.000,00</h2>
          </div>
          <div className="food-quantity">
            <img src={minus} alt="" />
            <span>2</span>
            <div className="plus-image">
            <img src={plus} alt="" />
            </div>
          </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={strawberry} alt="Strawberry Float" />
          <h2>Strawberry Float</h2>
          <div className="food-order">
            <div className="food-price">
          <p>Price per portion</p>
          <h2> Rp 45.000,00</h2>
          </div>
          <div className="order">
            <button>Order</button>
          </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={healthy} alt="Healthy Kids Meal" />
          <h2>Healthy Kids Meal</h2>
          <div className="foods">
            <div className="food-rate">
          <p>Price per portion </p>
          <h2>Rp 78.000,00</h2>
          </div>
          <div className="food-quantity">
            <img src={minus} alt="" />
            <span>2</span>
            <div className="plus-image">
            <img src={plus} alt="" />
            </div>
          </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={mango} alt="Mango Cereal Milk" />
          <h2>Mango Cereal Milk</h2>
          <div className="foods">
            <div className="food-rate">
          <p>Price per portion </p>
          <h2>Rp 78.000,00</h2>
          </div>
          <div className="food-quantity">
            <img src={minus} alt="" />
            <span>2</span>
            <div className="plus-image">
            <img src={plus} alt="" />
            </div>
          </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={smoothie} alt="Smoothie Brown Berry" />
          <h2>Smoothie Brown Berry</h2>
          <div className="food-order">
            <div className="food-price">
          <p>Price per portion</p>
          <h2> Rp 95.000,00</h2>
          </div>
          <div className="order">
            <button>Order</button>
          </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={rainbow} alt="Rainbow Cupcake" />
          <h2>Rainbow Cupcake</h2>
          <div className="foods">
            <div className="food-rate">
          <p>Price per portion </p>
          <h2>Rp 78.000,00</h2>
          </div>
          <div className="food-quantity">
            <img src={minus} alt="" />
            <span>2</span>
            <div className="plus-image">
            <img src={plus} alt="" />
            </div>
          </div>
          </div>
        </div>

        <div className="menu-item">
          <img src={mie} alt="Mie Gocengan Spicy" />
          <h2>Mie Gocengan Spicy</h2>
          <div className="food-order">
            <div className="food-price">
          <p>Price per portion</p>
          <h2> Rp 95.000,00</h2>
          </div>
          <div className="order">
            <button>Order</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
