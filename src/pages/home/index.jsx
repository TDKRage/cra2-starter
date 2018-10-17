import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';
import { urls } from 'app/routes';
import './index.scss';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <code>src/App.js</code>
        <div> hwekk</div>
      </div>
      <Link to={urls.signIn()}> Sign IN </Link>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
