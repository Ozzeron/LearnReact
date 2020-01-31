import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';

let Users = (props) => {
    if (props.users.length === 0) {

        axios.get('http://localhost:4000/users').then(response =>{
            debugger;
        });


    }



    return <div>
        {
            props.users.map(u => <div key={u.id}>
              <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
                </div>
                  <div>
                      {u.followed ? <button onClick={() => {

                          props.unfollow(u.id)
                      }}>Unfollow</button> : <button onClick={() => {
                          props.follow(u.id)
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