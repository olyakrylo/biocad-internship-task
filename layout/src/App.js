import React from 'react';
import './App.css';
import Search from './components/Search'
import Report from './components/Report'
import Device from './components/Device'

function App() {
  return (
    <div className="App">
      <Search />
      <Device />
      <Report />
    </div>
  );
}

export default App;
