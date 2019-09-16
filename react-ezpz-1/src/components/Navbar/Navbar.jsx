import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <a href="/Profile"><div>Profile</div></a>
            </div>
            <div className={`${classes.active}`}>
                <a href="/Dialogs"><div>Messages</div></a>
            </div>
            <div>
                <a href="/News"><div>News</div></a>
            </div>
            <div>
                <a href="/music"><div>Music</div></a>
            </div>
            <div>
                <a href="/settings"><div>Settings</div></a>
            </div>
        </nav>
    );
};

export default Navbar;