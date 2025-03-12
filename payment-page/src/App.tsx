import React, { useState } from "react";
import "./App.css"; // Import des styles

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"card" | "upi">("card"); // Gère les onglets avec un type précis

  return (
    <div>
      {/* Barre de navigation */}
      <header>
        <div className="navbar">
          <div className="logo">✈️ Air Algerie</div>
          <nav>
            <a href="#">HOME</a>
            <a href="#">MY FLIGHTS</a>
            <a href="#">ABOUT</a>
            <a href="#">FEEDBACK</a>
          </nav>
          <div className="user-info">
            <span className="user-icon">👤</span>
            <span className="user-name">COMPTE</span>
            <button className="logout-btn">Logout ⮕</button>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <div className="container">
        <h2>PAYMENT</h2>

        <div className="payment-box">
          {/* Onglets de paiement */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "card" ? "active" : ""}`}
              onClick={() => setActiveTab("card")}
            >
              Credit/Debit Card Payment
            </button>
            <button
              className={`tab ${activeTab === "upi" ? "active" : ""}`}
              onClick={() => setActiveTab("upi")}
            >
              UPI Payment
            </button>
          </div>

          {/* Détails du prix */}
          <p className="total-fare">Total Fare : <strong>INR 2010</strong></p>

          {/* Paiement par carte */}
          {activeTab === "card" && (
            <div className="payment-form active">
              <label htmlFor="card-number">Credit/Debit Card Payment</label>
              <input type="text" id="card-number" placeholder="Card Number" required />

              <div className="row">
                <select required>
                  <option>Expiry Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i}>{String(i + 1).padStart(2, "0")}</option>
                  ))}
                </select>

                <select required>
                  <option>Expiry Year</option>
                  {[2025, 2026, 2027, 2028, 2029].map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>

                <input type="text" placeholder="CVV" required />
              </div>

              <button type="submit" className="pay-btn">Pay with Card</button>
            </div>
          )}

          {/* Paiement UPI */}
          {activeTab === "upi" && (
            <div className="payment-form active">
              <label htmlFor="upi-id">UPI Payment</label>
              <input type="text" id="upi-id" placeholder="Enter UPI ID" required />
              <p className="example-text">( Example: username@bank )</p>
              <button type="submit" className="pay-btn">Pay with UPI</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
