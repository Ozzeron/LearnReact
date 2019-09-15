import React from 'react';
import profiles from './Post.module.css';

const Post = () => {
    return (
        <div className={profiles.item}>
            <img src="https://picsum.photos/id/237/200/300" alt="avatar"/>
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>);
};

export default Post;