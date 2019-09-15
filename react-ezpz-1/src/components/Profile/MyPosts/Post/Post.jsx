import React from 'react';
import profiles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={profiles.item}>
            <img src="https://picsum.photos/id/237/200/300" alt="avatar"/>
            <div>
                {props.message}
            </div>
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>);
};

export default Post;