import React from 'react';
import dialogStyles from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./DialogsMessages/Message";





const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dymych'},
        {id: 2, name: 'Nikita'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'},
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your react'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    let dialogsData = dialogs.map(d =><DialogItem name={d.name} id={d.id}/>);
    let messagesData = messages.map(m => <Message message={m.message}/>);
    return (
        <div className={dialogStyles.content}>
            <div className={dialogStyles.dialogs}>
                <div className={dialogStyles.dialogsItems}>
                    {dialogsData}
                </div>
                <div className={dialogStyles.messages}>
                    {messagesData}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;