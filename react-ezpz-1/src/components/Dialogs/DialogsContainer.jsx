import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (textMessage) => {
            let action = updateNewMessageTextActionCreator(textMessage);
            dispatch(action);
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;