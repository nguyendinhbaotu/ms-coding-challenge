import React from 'react';
import logo from './logo.svg';
import './App.css';
import Order from './pages/Order';
import ProductCard from './pages/components/ProductCard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Order/>
      <ProductCard/>
    </div>
  );
}

export default App;
