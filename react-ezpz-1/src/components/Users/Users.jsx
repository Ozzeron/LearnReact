import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('http://localhost:4000/users').then(response => {
            props.setUsers(response.data)
        });


    }


    return <div>
        {
            props.users.map(u => <div key={u._id}>
              <span>
                <div>
                    <img src={u.photoUrl ? u.photoUrl : userPhoto} className={styles.userPhoto} alt=""/>
                </div>
                  <div>
                      {u.followed ? <button onClick={() => {
                          props.unfollow(u._id)
                      }}>Unfollow</button> : <button onClick={() => {
                          props.follow(u._id)
                      }}>Follow</button>}
                  </div>
              </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>

                    <div></div>
                    </span>
            </div>)
        }
    </div>
};

export default Users;