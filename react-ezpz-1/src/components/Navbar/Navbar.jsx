import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/Profile">
                    <div>Profile</div>
                </NavLink>
            </div>
            <div cclassName={classes.item}>
                <NavLink to="/Dialogs" activeClassName={classes.activeLink}>
                    <div>Messages</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News">
                    <div>News</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music">
                    <div>Music</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings">
                    <div>Settings</div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;