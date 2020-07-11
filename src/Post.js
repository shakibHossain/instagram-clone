import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          alt="ShakibHossain"
          src="/static/images/avatar/1.jpg"
          className="post__avatar"
        />
        <h3>{username}</h3>
      </div>
      {/* header -> avatar + username */}

      <img class="post__image" src={imageUrl} alt="" />
      {/* image */}

      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username + caption*/}
    </div>
  );
}

export default Post;
