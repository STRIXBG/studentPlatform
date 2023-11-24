import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const likeAPost = (postId) => {
    axios
      .post(
        "http://localhost:3001/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        setListOfPosts((prevPosts) =>
          prevPosts.map((post) => {
            if (post.id === postId) {
              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = [...post.Likes];
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            }
            return post;
          })
        );
      });
  };

  return (
    <div>
      {listOfPosts.map((value, key) => (
        <div key={key} className="post">
          <div className="title"> {value.title} </div>
          <div
            className="body"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            {value.postText}
          </div>
          <div className="footer">
            {value.username}{" "}
            <button
              onClick={() => {
                likeAPost(value.id);
              }}
            >
              {" "}
              Like
            </button>
            <label> {value.Likes.length}</label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
