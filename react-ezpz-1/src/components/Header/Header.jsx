import React from 'react';
import header from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    console.log(props)
    return (
        <header className={header.header}>
            <div>
                <NavLink to="/profile">
                    <img alt={'header'}
                         src='https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png'/>
                </NavLink>
            </div>
            <div className={header.Hello}>
                <div className={header.typewriter}>
                    <h1>Welcome.</h1>
                </div>
            </div>
            <div id={header.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>

    );
};

export default Header;

