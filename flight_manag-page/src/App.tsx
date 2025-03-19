import React, { useReducer } from "react";
import "./App.css";
import logo from "./Logo/logo.png";

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
      <button className="logout">Logout ⮕</button>
    </header>
  );
};

interface State {
  airline: string;
  flightNumber: string;
  economySeats: number;
  businessSeats: number;
  firstClassSeats: number;
  hasEconomy: boolean;
  hasBusiness: boolean;
  hasFirstClass: boolean;
}

const initialState: State = {
  airline: "",
  flightNumber: "",
  economySeats: 0,
  businessSeats: 0,
  firstClassSeats: 0,
  hasEconomy: false,
  hasBusiness: false,
  hasFirstClass: false,
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "SET_AIRLINE":
      return { ...state, airline: action.payload };
    case "SET_FLIGHT_NUMBER":
      return { ...state, flightNumber: action.payload };
    case "TOGGLE_CLASS":
      return { ...state, [action.payload]: !state[action.payload] };
    case "SET_SEATS":
      return { ...state, [action.payload.field]: action.payload.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Flight Added: ${state.airline}, Number: ${state.flightNumber}, Seats - Economy: ${state.economySeats}, Business: ${state.businessSeats}, First Class: ${state.firstClassSeats}`
    );
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <div className="card">
          <h2>ADD A FLIGHT</h2>
          <div className="form-group">
            <label>Select Airline:</label>
            <select onChange={(e) => dispatch({ type: "SET_AIRLINE", payload: e.target.value })}>
              <option value="">Select</option>
              <option value="AirFrance">Air France</option>
              <option value="JetSetFly">JetSetFly</option>
              <option value="Air Algeria">Air Algérie</option>
              <option value="AirItaly">Air Italy</option>
              <option value="AirSpain">Air Spain</option>
              <option value="AirTunisia">Air <Tunisia></Tunisia></option>
            </select>
          </div>
          <div className="form-group">
            <label>Enter Flight Number:</label>
            <input type="text" onChange={(e) => dispatch({ type: "SET_FLIGHT_NUMBER", payload: e.target.value })} />
          </div>
          <strong>Flight Has:</strong>
          {[
            { label: "Economy Class", key: "hasEconomy" },
            { label: "Business Class", key: "hasBusiness" },
            { label: "First Class", key: "hasFirstClass" },
          ].map(({ label, key }) => (
            <label key={key}>
              <input type="checkbox" checked={state[key as keyof State]} onChange={() => dispatch({ type: "TOGGLE_CLASS", payload: key })} />
              {label}
            </label>
          ))}
          {state.hasEconomy && (
            <div className="input-group">
              <label>Number of Economy Seats:</label>
              <input type="number" onChange={(e) => dispatch({ type: "SET_SEATS", payload: { field: "economySeats", value: Number(e.target.value) } })} />
            </div>
          )}
          {state.hasBusiness && (
            <div className="input-group">
              <label>Number of Business Seats:</label>
              <input type="number" onChange={(e) => dispatch({ type: "SET_SEATS", payload: { field: "businessSeats", value: Number(e.target.value) } })} />
            </div>
          )}
          {state.hasFirstClass && (
            <div className="input-group">
              <label>Number of First Class Seats:</label>
              <input type="number" onChange={(e) => dispatch({ type: "SET_SEATS", payload: { field: "firstClassSeats", value: Number(e.target.value) } })} />
            </div>
          )}
          <div className="input-group">
            <label>Total Number of Seats:</label>
            <input type="number" value={state.economySeats + state.businessSeats + state.firstClassSeats} readOnly />
          </div>
          <div className="button-group">
            <button className="submit" onClick={handleSubmit}>Submit</button>
            <button className="reset" onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          </div>
        </div>
      </div>
      {/* Footer */}
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

export default App;
