import React from 'react';
import './index.css';
import Header from '../Header';
import CardPanel from '../CardPanel';
import Main from '../Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <Main />
      </div>
      <div>
        <CardPanel />
      </div>
    </div>
  );
}

export default App;
