import React from 'react';
import './App.css';
import Routes from './config/routes';

// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const App = () => {
  
  return (
    <div className="app">
      <header>
        <h1>FreeChat</h1>
        <p className="subheader">Video Conferencing</p>
      </header>
      <main>
      {/* <i class="fas fa-microphone fa-lg"></i> */}
      {/* <FontAwesomeIcon icon={['fas', 'apple']} /> */}
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