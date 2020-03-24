import React from 'react';
import friendsStyles from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={friendsStyles.friendBlock}>
            <img src={props.friends.avatarLink} alt=""/>
            <div className={friendsStyles.friendName}>{props.friends.name}</div>
        </div>
)
    ;
};

export default Friends;