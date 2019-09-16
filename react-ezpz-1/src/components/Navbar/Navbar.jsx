import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/Profile" activeClassName={classes.activeLink}>
                    <div>Profile</div>
                </NavLink>
            </div>
            <div cclassName={classes.item}>
                <NavLink to="/Dialogs" activeClassName={classes.activeLink}>
                    <div>Messages</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News" activeClassName={classes.activeLink}>
                    <div>News</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.activeLink}>
                    <div>Music</div>
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>
                    <div>Settings</div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;