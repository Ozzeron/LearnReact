import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (textMessage) => {
        let action = updateNewMessageTextActionCreator(textMessage);
        props.store.dispatch(action);
    };

    return <Dialogs
        onMessageChange={onMessageChange}
        addMessage={addMessage}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        newMessageText={state.dialogsPage.newMessageText}/>;
};

export default DialogsContainer;