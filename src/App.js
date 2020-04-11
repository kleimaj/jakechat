import React from 'react';
import './App.css';
import VideoChat from './VideoChat';
import Routes from './config/routes';

const App = () => {
  
  return (
    <div className="app">
      <header>
        <h1>JakeChat</h1>
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
          by <a href="http://jacobkleiman.com">Jake</a>
        </p>
      </footer>
    </div>
  );
};

export default App;