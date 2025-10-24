import holbertonLogo from './assets/holberton-logo.jpg';
import './App.css';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>Copyright {currentYear} - Holberton School</p>
      </div>
    </>
  );
}

export default App;