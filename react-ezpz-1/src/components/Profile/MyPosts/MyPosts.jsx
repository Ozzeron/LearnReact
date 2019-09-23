import React from 'react';
import profiles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsData = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = ()=> {
      let text = newPostElement.current.value;
      props.addPost(text);
    };
    return (<div className={profiles.posts} id='MyPosts'>
            my posts
            <div>
                <textarea name="text" ref={newPostElement} cols="30" rows="10"></textarea>
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