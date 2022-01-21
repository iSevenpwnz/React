import React from 'react';

import css from './User.module.css'

const User = ({user, getUser}) => {
    const {id, name} = user;

    return (
        <div className={css.flex}>
            <div>{id}) {name}</div>
            <button onClick={() => getUser(user)}>Details</button>
        </div>
    );
};

export default User;