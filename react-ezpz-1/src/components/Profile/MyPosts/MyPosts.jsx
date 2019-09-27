import React from 'react';
import profiles from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postsData = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        debugger
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (<div className={profiles.posts} id='MyPosts'>
            my posts
            <div>
                <textarea onChange={onPostChange} name="text" ref={newPostElement} value={props.profilePage.newPostText} cols="30"
                          rows="10"/>
                <div className={profiles.buttons}>
                    <button className="button" onClick={addPost}>Add post</button>
                </div>
            </div>
            <div id='posts'>
                {postsData}
            </div>
        </div>
    );
};

export default MyPosts;