import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onMessageChange = (textMessage) => {
                    let action = updateNewMessageTextActionCreator(textMessage);
                    store.dispatch(action);
                };
                return <Dialogs
                    onMessageChange={onMessageChange}
                    addMessage={addMessage}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageText={state.dialogsPage.newMessageText}/>;
            }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;