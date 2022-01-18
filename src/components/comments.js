import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            })
    }, [])

    return (
        <div>
            {
                comments.map(value => <div key={value.id}>
                    COMMENTS -- <Comment item={value}/> </div>)
            }
        </div>
    );
};

export default Comments;