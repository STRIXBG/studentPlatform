/*import React from 'react';

const HomePublications = ({ listOfPosts, navigate, likeAPost }) => {
  return (
    <>
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
            {value.username}{' '}
            <button
              onClick={() => {
                likeAPost(value.id);
              }}
            >
              {' '}
              Like
            </button>
            <label> {value.Likes.length}</label>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomePublications;

*/