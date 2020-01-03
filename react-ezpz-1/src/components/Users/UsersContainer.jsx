import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userID) =>{
            dispatch(unfollowAC(userID));
        },
        unfollow: (userID) =>{
            dispatch(followAC(userID));
        },
        setUsers: (userID) =>{
            dispatch(setUsersAC(userID));
        },

    }
};

export default connect (mapStateToProps, mapDispatchToProps) (Users);