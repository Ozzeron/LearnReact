import messageStyles from "./MessageStyles.module.css";
import React from "react";

const Message = (props) => {
    return <div className={messageStyles.messages}>{props.message}</div>;
};

export default Message;