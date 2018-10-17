import React from 'react';
import { Link } from 'react-router-dom';
import { urls } from 'app/routes';

const SignIn = () => (
  <div>
    <Link to={urls.home()}> Go Back</Link>
  </div>
);

export default SignIn;
