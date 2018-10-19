import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material/react-button/dist';
import logo from 'assets/logo.svg';
import './page.scss';

const Home = ({ onSignInClick }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <code>src/App.js</code>
        <div> hwekk</div>
      </div>
      <Button raised onClick={onSignInClick} type="button">
        {' '}
        Sign IN{' '}
      </Button>
    </header>
  </div>
);

Home.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
};

export default Home;
