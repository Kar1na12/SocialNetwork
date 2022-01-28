import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Nav.module.css";
const Nav = () => {
  return (
  <nav className={classes.nav}>
    <div className={classes.item}><NavLink to="/Profile" activeClassName={classes.active}>Profile</NavLink></div>
    <div className={`${classes.item} ${classes.active1}`}><NavLink to="/Dialogs" activeClassName={classes.active}>Dialogs</NavLink></div>
    <div className={classes.item}><NavLink to="/News">News</NavLink></div>
    <div className={classes.item}><NavLink to="/Musik">Music</NavLink></div>
    <div className={classes.item}><NavLink to="/Settings">Settings</NavLink></div>
  </nav>
  )
};
  
export default Nav;
// const Header = () => {
    
// }