import React from 'react';
import header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={header.header}>
            <div>
                <NavLink to="/profile">
                    <img alt={'header'} src='/images/logo.png'/>
                </NavLink>
            </div>
            <div className={header.Hello}>
                <div className={header.typewriter}>
                    <h1>{props.isAuth ? `Welcome back ${props.login}` : 'WAZZZUP DUDE'}</h1>
                </div>
            </div>
            <div id={header.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    );
};

export default Header;

