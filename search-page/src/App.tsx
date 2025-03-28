import React from "react";
import "./App.css";
import logo from "./Logo/logo.png"; 

console.log(logo);


// Définition des types pour les classes de vol
interface FlightClass {
  type: string;
  price: string;
  seats: number;
  available: boolean;
}

// Définition des types pour un vol
interface Flight {
  departure: string;
  arrival: string;
  depTime: string;
  arrTime: string;
  classes: FlightClass[];
}

// Composant Header
const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="Air Algérie" className="logo" />
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">My Flights</a>
        <a href="#">About</a>
        <a href="#">Feedback</a>
        <a href="#" className="compte-link"><i className="fas fa-user"></i> COMPTE</a>
      </nav>
      <div className="user">
        <button className="logout">Logout ⮕</button>
      </div>
    </header>
  );
};

// Composant FlightCard avec types
const FlightCard: React.FC<Flight> = ({ departure, arrival, depTime, arrTime, classes }) => {
  return (
    <div className="flight-card">
      <div className="flight-info">
        <span className="departure">{departure}</span>
        <span className="time">{depTime}</span>
        <span className="arrow">➡️</span>
        <span className="time">{arrTime}</span>
        <span className="arrival">{arrival}</span>
      </div>
      <div className="classes">
        {classes.map((cls, index) => (
          <div key={index} className={`class ${cls.available ? "" : "unavailable"}`}>
            <h4>{cls.type}</h4>
            <p>{cls.price}</p>
            <p>Seats Available: {cls.seats}</p>
            <button disabled={!cls.available}>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Composant Booking
const Booking: React.FC = () => {
  const flights: Flight[] = [
    {
      departure: "NSK",
      arrival: "BOM",
      depTime: "16:44",
      arrTime: "17:50",
      classes: [
        { type: "Economy", price: "INR 1000", seats: 35, available: true },
        { type: "Business", price: "INR 8000", seats: 20, available: true },
        { type: "First Class", price: "INR 9000", seats: 15, available: true }
      ]
    },
    {
      departure: "NSK",
      arrival: "BOM",
      depTime: "19:50",
      arrTime: "21:40",
      classes: [
        { type: "Economy", price: "INR 1002", seats: 20, available: true },
        { type: "Business", price: "INR 8002", seats: 10, available: true },
        { type: "First Class", price: "INR 5002", seats: 15, available: true }
      ]
    },
    {
      departure: "NSK",
      arrival: "BOM",
      depTime: "23:50",
      arrTime: "01:40",
      classes: [
        { type: "Economy", price: "INR 1502", seats: 30, available: true },
        { type: "Business", price: "INR 8092", seats: 40, available: true },
        { type: "First Class", price: "INR 9802", seats: 15, available: true }
      ]
    },
    {
      departure: "NSK",
      arrival: "BOM",
      depTime: "04:50",
      arrTime: "06:40",
      classes: [
        { type: "Economy", price: "INR 2002", seats: 15, available: true },
        { type: "Business", price: "INR 7502", seats: 30, available: true },
        { type: "First Class", price: "INR 4002", seats: 35, available: true }
      ]
    },
    {
      departure: "NSK",
      arrival: "BOM",
      depTime: "9:50",
      arrTime: "11:40",
      classes: [
        { type: "Economy", price: "INR 3002", seats: 10, available: true },
        { type: "Business", price: "INR 8702", seats: 25, available: true },
        { type: "First Class", price: "INR 9002", seats: 15, available: true }
      ]
   }
  ];

  return (
    <section className="booking">
      <h1>Make a Booking</h1>
      <h3>Nashik (NSK) To Mumbai (BOM)</h3>
      <p>08 Mars 2025</p>
      {flights.map((flight, index) => (
        <FlightCard key={index} {...flight} />
      ))}
    </section>
  );
};

// Composant principal App
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Booking />

      {/* Pied de page */}
      <footer className="footer">
        <p>
          <strong>
            Tous droits réservés | <a href="/mentions-legales">Mentions légales</a> | 
            <a href="/confidentialite"> Politique de confidentialité</a>
          </strong>
        </p>
        <div className="social-icons">
          <a href="#" target="_blank">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <p>© 2025 Air Algérie – Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;
