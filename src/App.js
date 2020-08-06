import React from 'react';
import logo from "./logo.jpg";
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from "./components/Profile";
import SearchRepo from './components/SearchRepo'
import Header from './components/Header'

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Route exact={true} path="/user" component={Profile} />
        <Route path="/repo" component={SearchRepo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
