import React from 'react';
import classes from './Navbar.css';
import {Link} from 'react-router-dom';
import Logo from '../../assets/burger-logo.png';
const navbar = (props) => (
  <div className={classes.Navbar}>
  <ul>
    <li className={classes.Logo}>
    <img src={Logo} alt="Logo" />
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/users">Users</Link>
    </li>
  </ul>
</div>
    
);

export default navbar;