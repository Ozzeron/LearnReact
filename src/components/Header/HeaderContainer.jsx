import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Urls from '../../urlsForApiRequests'

class HeaderContainer extends React.Component {
    de
    componentDidMount() {
        axios.get(`${Urls}/auth`,{
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }
    render() {
        return <Header {...this.props}/>
    }
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);

