import React from 'react';
import './index.css';
import Header from '../Header';
import CardPanel from '../CardPanel';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-header">
        React App
      </div>
      <div>
        <CardPanel />
      </div>
    </div>
  );
}

export default App;
