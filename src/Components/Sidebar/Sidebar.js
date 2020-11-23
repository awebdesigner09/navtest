import React from 'react';
import classes from './Sidebar.css';
import {NavLink} from 'react-router-dom';
const navbar = (props) => (
  <div className={classes.sidebar}>
  
      <NavLink to="/" >Home</NavLink>
    
      <NavLink to="/about">About</NavLink>
   
      <NavLink to="/users">Users</NavLink>
    
</div>
    
);

export default navbar;