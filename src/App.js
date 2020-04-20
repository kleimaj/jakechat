import React from 'react';
import './App.css';
import Routes from './config/routes';
import { Link } from 'react-router-dom';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

console.log('%c🦄', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)')

const App = () => {
  
  return (
    <div className="app">
      <header>
      <Link className="headerLink" to="/">

        <h1>FreeChat</h1>
        <p className="subheader">Video Conferencing</p>
      </Link>

      </header>
      <main>
        <Routes />
      </main>
      <footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="React">
            ⚛
          </span>{' '}
          by <a href="http://jacobkleiman.com">Jacob</a>
        </p>
      </footer>
    </div>
  );
};

export default App;