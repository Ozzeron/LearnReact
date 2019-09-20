import React from 'react';
import friendsStyles from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={friendsStyles.friends}>
            {props.friends.name}
            <img src={props.friends.avatarLink} alt=""/>
        </div>
)
    ;
};

export default Friends;