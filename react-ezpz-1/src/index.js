import React from 'react';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let renderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
                addMessage={addMessage}/>
        </BrowserRouter>, document.getElementById('root'));
};

renderEntireTree(state);

subscribe(renderEntireTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

