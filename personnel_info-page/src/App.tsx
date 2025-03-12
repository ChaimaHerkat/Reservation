import React from "react";
import "./App.css";

// Définition du type des props pour PassengerCard
interface PassengerCardProps {
  passengerNumber: number;
}

// Composant PassengerCard
const PassengerCard: React.FC<PassengerCardProps> = ({ passengerNumber }) => {
  return (
    <div className="passenger-card">
      <h3>Passenger {passengerNumber}</h3>
      <div className="form-group">
        <label>Title</label>
        <select>
          <option>Mr</option>
          <option>Ms</option>
          <option>Mrs</option>
        </select>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter First Name" />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter Last Name" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Mobile Number</label>
          <input type="tel" placeholder="Enter Mobile Number" />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Composant principal App
const App: React.FC = () => {
  return (
    <div>
      {/* Header */}
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

      {/* Main Content */}
      <main>
        <h2 className="title">Personal Information</h2>

        <form>
          {/* Passenger 1 */}
          <PassengerCard passengerNumber={1} />
          {/* Passenger 2 */}
          <PassengerCard passengerNumber={2} />

          {/* Buttons */}
          <div className="buttons">
            <button type="button" className="back-btn">Back</button>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
