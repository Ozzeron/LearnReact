import React from 'react';
import profiles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import * as axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:4000/profiles/2`).then(response => {
            this.props.ToggleIsFetching(false);
            this.props.setUsers(response.data);
            this.props.setUsersTotalCount(response.data.totalCount)
        });
    }

    render() {
        return (
            <div className={profiles.content}>
                <Profile {...this.props}/>
            </div>
        );
    }
};

export default ProfileContainer;