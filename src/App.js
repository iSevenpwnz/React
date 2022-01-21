import React, {useState} from 'react';

import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import Posts from "./Components/Posts/Posts";
import css from './App.module.css'
import {postService} from "./services/post.service";

const App = () => {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }

    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]))
    }

    return (
        <div>
            <div className={css.flex}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>
    );
};

export default App;
