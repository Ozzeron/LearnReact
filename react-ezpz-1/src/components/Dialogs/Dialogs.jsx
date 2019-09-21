import React from 'react';
import dialogStyles from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./DialogsMessages/Message";

const Dialogs = (props) => {
    let dialogsData = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesData = props.state.messages.map(m => <Message message={m.message}/>);

    let messagetext = React.createRef()

    let addMessage = () =>{
      let message = messagetext.current.value;
      alert(message)
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
                    <textarea name="addmessage" ref={messagetext}  cols="30" rows="10"></textarea>
                    </div>
                    <button onClick={addMessage}>Add Message</button>
                </div>

            </div>
        </div>
    );
};

export default Dialogs;