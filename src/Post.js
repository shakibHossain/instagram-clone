import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/* header -> avatar + username */}

      <img
        class="post__image"
        src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt=""
      />
      {/* image */}

      <h4 className="post__text">
        <strong>shakib</strong> WOW day three of live sessions
      </h4>
      {/* username + caption*/}
    </div>
  );
}

export default Post;
