import React from "react";
import "./App.css";

const FlightPreview: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">✈️ Air Algerie</div>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">MY FLIGHTS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">FEEDBACK</a></li>
            <li>
              <a href="#" className="compte-link">
                <i className="fas fa-user"></i> COMPTE
              </a>
            </li>
          </ul>
          <div className="user-info">
            <button className="logout-btn">Logout ⮕</button>
          </div>
        </nav>
      </header>

      <main>
        <h2 className="preview-title">Preview</h2>

        <div className="flight-info">
          <div className="departure">
            <h3>Nashik (NSK)</h3>
            <p>Departed</p>
            <strong>21:20</strong>
            <p>Sat, 04 May</p>
          </div>

          <div className="flight-line">
            <p>IndiGo 202</p>
            <div className="line">
              <span className="dot"></span>
              <span className="line-bar"></span>
              <span className="plane">✈️</span>
              <span className="line-bar"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="arrival">
            <h3>Mumbai (BOM)</h3>
            <p>Arrived</p>
            <strong>22:40</strong>
            <p>Sat, 04 May</p>
          </div>
        </div>

        <div className="cost-info">
          <p><strong>Total Passenger(s):</strong> 2</p>
          <p><strong>Cost Per Seat:</strong> INR 1005</p>
          <p><strong>Total Cost:</strong> INR 2010</p>
        </div>

        <div className="buttons">
          <button className="back-btn">Back</button>
          <button className="proceed-btn">Proceed</button>
        </div>
      </main>
    </div>
  );
};

export default FlightPreview;
