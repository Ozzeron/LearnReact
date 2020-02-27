import React from 'react';
import profiles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:4000/profiles/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div className={profiles.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);