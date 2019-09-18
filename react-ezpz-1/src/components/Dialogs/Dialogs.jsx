import React from 'react';
import dialogStyles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/1' + props.id;
    return (
        <div className={dialogStyles.dialog + ' ' + dialogStyles.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
};

const Message = (props) => {
    return <div className={dialogStyles.messages}>{props.message}</div>;
};

const Dialogs = () => {
    return (
        <div className={dialogStyles.content}>
            <div className={dialogStyles.dialogs}>
                <div className={dialogStyles.dialogsItems}>
                    <DialogItem name='Dymych' id='1'/>
                    <DialogItem name='Nikita' id='2'/>
                    <DialogItem name='Sveta' id='3'/>
                    <DialogItem name='Sasha' id='4'/>
                    <DialogItem name='Valera' id='5'/>
                    <DialogItem name='Viktor' id='6'/>
                </div>
                <div className={dialogStyles.messages}>
                    <Message message = 'Hi'/>
                    <Message message = 'How is your react'/>
                    <Message message = 'Yo'/>
                    <Message message = 'Yo'/>
                    <Message message = 'Yo'/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;