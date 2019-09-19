import React from 'react';
import dialogStyles from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./DialogsMessages/Message";





const Dialogs = (props) => {
    let dialogsData = props.dialogs.map(d =><DialogItem name={d.name} id={d.id}/>);
    let messagesData = props.messages.map(m => <Message message={m.message}/>);
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