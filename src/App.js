import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="navigation">
          <h1 className="app-logo">
            <a href="index.html">Cadence</a>
          </h1>
          <input type="search" className="search-bar"></input>
          <div className="login-signup-buttons">
            <button className="nav-button">Sign up</button>
            <button className="nav-button">Log in</button>
          </div>
        </div>
      </nav>
      <div className="content-container">
        <div className="content-grid">
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
