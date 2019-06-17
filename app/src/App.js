import React from 'react';
import './Resources/css/App.css';
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import Home from './Component/Home';
import Report from './Component/Report';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="Body">
        <Header></Header>
        <Home></Home>
        <Report></Report>
      </div>
    </div>
  );
}

export default App;
