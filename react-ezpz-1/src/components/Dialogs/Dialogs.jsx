import React from 'react';
import dialogStyles from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./DialogsMessages/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsData = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesData = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let textMessage = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(textMessage);
        props.dispatch(action);
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
                                  value={props.state.newMessageText} cols="30" rows="10"></textarea>
                    </div>
                    <button onClick={addMessage}>Send Message</button>
                </div>

            </div>
        </div>
    );
};

export default Dialogs;