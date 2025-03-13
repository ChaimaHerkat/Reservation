import React, { useState } from "react";
import "./App.css";

const Header: React.FC = () => {
  console.log("Header rendu"); // Vérification dans la console

  return (
    <header>
      <div className="logo">✈️ Air Algérie</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">My Flights</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Feedback</a></li>
          <li><a href="#" className="compte-link"><i className="fas fa-user"></i> COMPTE</a></li>
        </ul>
      </nav>
      <div className="user">
        <button className="logout">Logout ⮕</button>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  const [airline, setAirline] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [economySeats, setEconomySeats] = useState(0);
  const [businessSeats, setBusinessSeats] = useState(0);
  const [firstClassSeats, setFirstClassSeats] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Flight Added: ${airline}, Number: ${flightNumber}, Seats - Economy: ${economySeats}, Business: ${businessSeats}, First Class: ${firstClassSeats}`
    );
  };

  return (
    <>
      <Header /> {/* Affichage du header */}
      <div className="form-container">
        <div className="card">
          <h2>ADD A FLIGHT</h2>

          <div className="form-group">
            <label>Select Airline:</label>
            <select onChange={(e) => setAirline(e.target.value)}>
              <option value="">Select</option>
              <option value="AirFrance">Air France</option>
              <option value="JetSetFly">JetSetFly</option>
              <option value="Air Algeria">Air Algérie</option>
              <option value="AirItaly">Air Italy</option>
              <option value="AirApain">AirSpain</option>
              <option value="Air Tunisie">Air Tunisie</option>
            </select>
          </div>

          <div className="form-group">
            <label>Enter Flight Number:</label>
            <input type="text" onChange={(e) => setFlightNumber(e.target.value)} />
          </div>

          <strong>Flight Has:</strong>
          <label><input type="checkbox" /> Economy Class</label>
          <label><input type="checkbox" /> Business Class</label>
          <label><input type="checkbox" /> First Class</label>

          <div className="input-group">
            <label>Enter Number of Economy Class Seats:</label>
            <input type="number" value={economySeats} onChange={(e) => setEconomySeats(Number(e.target.value))} />
          </div>

          <div className="input-group">
            <label>Enter Number of Business Class Seats:</label>
            <input type="number" value={businessSeats} onChange={(e) => setBusinessSeats(Number(e.target.value))} />
          </div>

          <div className="input-group">
            <label>Enter Number of First Class Seats:</label>
            <input type="number" value={firstClassSeats} onChange={(e) => setFirstClassSeats(Number(e.target.value))} />
          </div>

          <div className="input-group">
            <label>Total Number of Seats:</label>
            <input type="number" value={economySeats + businessSeats + firstClassSeats} readOnly />
          </div>

          <div className="button-group">
            <button className="submit" onClick={handleSubmit}>Submit</button>
            <button className="reset" onClick={() => { 
              setAirline(""); 
              setFlightNumber(""); 
              setEconomySeats(0); 
              setBusinessSeats(0); 
              setFirstClassSeats(0); 
            }}>Reset</button>
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
      </div>
    </>
  );
};

export default App;
