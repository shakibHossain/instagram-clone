import React, { useState, useEffect } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import { db } from "./firebase";

function Post({ postId, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {};

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
      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComments(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
