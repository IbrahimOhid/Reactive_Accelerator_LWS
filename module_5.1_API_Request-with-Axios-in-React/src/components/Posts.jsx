import React from "react";

const Posts = ({ posts, onDeletePost, onEditPost }) => {
  return (
    <div>
      <div>
        <h2>All Posts</h2>
        <div>
          <ul>
            {posts.map((post) => {
              const { id, title } = post;
              return (
                <li className="mb-3" key={id}>
                  <span>{id}. </span>
                  <span>{title}</span>

                  <span className="m-4" onClick={() => onDeletePost(id)}>
                    ❌
                  </span>
                  <span onClick={() => onEditPost(post)}>✏️</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posts;
