import React from 'react';
import header from './Header.module.css';

const Header = () => {
    return (
        <header className={header.header}>
            <img alt={'header'}
                 src='https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-03.png'/>
            <div className={header.Hello}>
                <div className={header.typewriter}>
                    <h1>Welcome.</h1>
                </div>
            </div>
        </header>

    );
};

export default Header;

