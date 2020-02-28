import React from 'react';
import profiles from './Profile.module.css';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if(!id){
            id = 2;
        }
        axios.get(`http://localhost:4000/profiles/${id}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <div className={profiles.content}>
                <Profile {...this.props} profile={(this.props.profile)}/>
            </div>
        );
    }
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);