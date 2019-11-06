import React from 'react';
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Profile from "./Main/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
