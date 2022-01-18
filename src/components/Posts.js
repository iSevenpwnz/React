import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })

    }, [])
    return (
        <div>
            {
                posts.map(value => <div key={value.id}> POST -- <Post item={value}/>  </div>)
            }
        </div>
    );
};

export default Posts;