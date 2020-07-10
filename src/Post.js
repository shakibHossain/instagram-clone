import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
            {/* header -> avatar + username */}

            <img class = "post__image" src=""></img>
            {/* image */}

            <h4>Username: caption</h4>
            {/* username + caption*/}
            
        </div>
    )
}

export default Post
