import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <a href="/#"><div>Profile</div></a>
            </div>
            <div>
                <a href="/#"><div>Messages</div></a>
            </div>
            <div>
                <a href="/#"><div>News</div></a>
            </div>
            <div>
                <a href="/#"><div>Music</div></a>
            </div>
            <div>
                <a href="/#"><div>Settings</div></a>
            </div>
        </nav>
    );
};

export default Navbar;