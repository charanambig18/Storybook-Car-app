import React from "react";
import "./HotelGuestDashboard.css";

const HotelGuestDashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="profile-section">
          <div className="profile-pic"></div>
          <div className="profile-info">
            <h2 className="guest-name">Joana Barros</h2>
            <p className="guest-status">Hotel Guest</p>
          </div>
        </div>
        <div className="notification-icon"></div>
      </header>

      <section className="recommendation-section">
        <h3>Recommended for you</h3>
        <div className="recommendation-card">
          <p className="recommendation-title">Enjoy some me time</p>
          <p className="recommendation-desc">Relax with our massages and treatments.</p>
          <p className="recommendation-note">Spa facilities will close in: 4 hours</p>
          <span className="recommendation-price">From $30/person</span>
        </div>
      </section>

      <section className="popular-experiences">
        <h3>Popular experiences</h3>
        <div className="experience-carousel">
          <div className="experience-card">Bike Riding<br/><small>Varied tour options</small></div>
          <div className="experience-card">Dinner at the Table<br/><small>From $30/person</small></div>
        </div>
      </section>

      <section className="services-section">
        <h3>All services</h3>
        <ul className="services-list">
          <li className="service-item">Facilities<span>➡️</span></li>
          <li className="service-item">Virtual Key<span>➡️</span></li>
          <li className="service-item">My Room<span>➡️</span></li>
          <li className="service-item">Order Room Service<span>➡️</span></li>
        </ul>
      </section>

      <footer className="dashboard-footer">
        <div className="footer-points">
          <p className="points-amount">06 points</p>
          <p className="points-description">Accumulate points with your stay. They will turn into special offers for you.</p>
        </div>
        <nav className="footer-nav">
          <div className="nav-icon home-icon"></div>
          <div className="nav-icon search-icon"></div>
          <div className="nav-icon calendar-icon"></div>
          <div className="nav-icon settings-icon"></div>
        </nav>
      </footer>
    </div>
  );
};

export default HotelGuestDashboard;
