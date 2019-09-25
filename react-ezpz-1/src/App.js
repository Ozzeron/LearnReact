import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.dialogsPage}
                           updateNewMessageText={props.updateNewMessageText}
                           addMessage={props.addMessage}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                           posts={props.state.profilePage.posts}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                           newPostText={props.state.profilePage.newPostText}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    )
};


export default App;
