import React from 'react';
import './App.css';
import Routes from './config/routes';

const App = () => {
  
  return (
    <div className="app">
      <header>
        <h1>FreeChat</h1>
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