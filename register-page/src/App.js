import React from "react";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulaire soumis !");
  };

  return (
    <div>
      {/* Barre de navigation */}
      <header>
        <div className="logo">✈️ Air Algerie</div>
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
          </ul>
        </nav>
      </header>

      {/* Formulaire d'inscription */}
      <section className="register-section">
        <h1>REGISTER</h1>
        <div className="register-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <select>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" required />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" required />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input type="password" required />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" required />
              </div>
            </div>

            <div className="buttons">
              <button type="button" className="back-btn">Back</button>
              <button type="submit" className="register-btn">Register</button>
            </div>
          </form>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="footer">
        <p>
          <strong>
            Tous droits réservés | <a href="/mentions-legales">Mentions légales</a> | 
            <a href="/confidentialite"> Politique de confidentialité</a>
          </strong>
        </p>
        <div className="social-icons">
          <span><i className="fab fa-instagram"></i> Instagram</span>
          <span><i className="fab fa-facebook"></i> Facebook</span>
          <span><i className="fab fa-linkedin"></i> LinkedIn</span>
          <span><i className="fab fa-twitter"></i> Twitter</span>
        </div>
        <p>© 2025 Air Algérie – Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;
