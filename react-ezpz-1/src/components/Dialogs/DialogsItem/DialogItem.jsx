import React from 'react';
import dialogstyles from './DialogItemStyles.module.css'
import {NavLink} from "react-router-dom";
import classes from "../../Navbar/Navbar.module.css";

const DialogItem = (props) => {
    let path = '/dialogs/1' + props.id;
    return (
        <div className={dialogstyles.dialogs} >
            <NavLink to={path} activeClassName={dialogstyles.activeLink}> {props.name} </NavLink>
        </div>
    );
};

export default DialogItem;