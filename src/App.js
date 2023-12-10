import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import About from "./components/About"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <div className="App">
      <Nav />
      <div className="App-content">
        <Main />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
