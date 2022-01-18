import React, {useEffect, useState} from 'react';
import User from "./User";
const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            })

    }, [])
    return (
        <div>
            {
                users.map(value => <div key={value.id}> NAME -- <User item={value}/>  </div>)
            }
        </div>
    );
};

export default Users;