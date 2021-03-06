import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pagination = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagination.push(i);
    }
    return <div>
        <div className={styles.pagination}>
            {pagination.map(p => {
                return  <span
                    className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u._id}>
              <span>
                <div>
                    <NavLink to={'/profile/'+ u.id}>
                    <img src={u.photoUrl ? u.photoUrl : '/images/user.png'} className={styles.userPhoto} alt=""/>
                    </NavLink>
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
}

export default Users;