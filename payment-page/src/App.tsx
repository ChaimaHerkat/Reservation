import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import logo from "./Logo/logo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Air Algérie" className="logo" />
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">My Flights</a>
        <a href="#">About</a>
        <a href="#">Feedback</a>
        <a href="#" className="compte-link">
          <i className="fas fa-user"></i> COMPTE</a>
      </nav>
      <button className="logout">Logout ⮕</button>
    </header>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("card");

  return (
    <>
      <Header />
      <div className="container">
        <h2>PAYMENT</h2>
        <div className="payment-box">
          <div className="tabs">
            <button className={`tab ${activeTab === "card" ? "active" : ""}`} onClick={() => setActiveTab("card")}>
              Credit/Debit Card
            </button>
            <button className={`tab ${activeTab === "upi" ? "active" : ""}`} onClick={() => setActiveTab("upi")}>
              UPI Payment
            </button>
          </div>
          <p className="total-fare">Total Fare : <strong>INR 2010</strong></p>
          {activeTab === "card" && (
            <div className="payment-form active">
              <label htmlFor="card-number">Card Number</label>
              <input type="text" id="card-number" placeholder="Enter Card Number" required />
              <div className="row">
                <select required>
                  <option>Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i}>{String(i + 1).padStart(2, "0")}</option>
                  ))}
                </select>
                <select required>
                  <option>Year</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{2025 + i}</option>
                  ))}
                </select>
                <input type="text" placeholder="CVV" required />
              </div>
              <button className="pay-btn">Pay with Card</button>
            </div>
          )}
          {activeTab === "upi" && (
            <div className="payment-form active">
              <label htmlFor="upi-id">UPI ID</label>
              <input type="text" id="upi-id" placeholder="Enter UPI ID" required />
              <p className="example-text">Example: username@bank</p>
              <button className="pay-btn">Pay with UPI</button>
            </div>
          )}
        </div>
      </div>
      <footer className="footer">
      <p><strong>Tous droits réservés | <a href="/mentions-legales">Mentions légales</a> | <a href="/confidentialite"> Politique de confidentialité</a></strong></p>
      <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
          <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
          <a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
        </div>
        <p>© 2025 Air Algérie – Tous droits réservés.</p>
      </footer>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;