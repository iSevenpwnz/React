import React from 'react';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/comments";

const App = () => {

    return (
        <div>
            <div className='flex'>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
};

export default App;