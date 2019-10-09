import React from 'react';
import dialogStyles from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./DialogsMessages/Message";

const Dialogs = (props) => {
    let dialogsData = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesData = props.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        props.onMessageChange(textMessage);
    };

    return (
        <div className={dialogStyles.content}>
            <div className={dialogStyles.dialogs}>
                <div className={dialogStyles.dialogsItems}>
                    {dialogsData}
                </div>
                <div className={dialogStyles.messages}>
                    <div>
                        {messagesData}
                        <textarea name="addmessage" onChange={onMessageChange} ref={newMessageElement}
                                  value={props.newMessageText} cols="30" rows="10"></textarea>
                    </div>
                    <button onClick={addMessage}>Send Message</button>
                </div>

            </div>
        </div>
    );
};

export default Dialogs;