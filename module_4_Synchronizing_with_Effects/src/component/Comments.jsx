import React, { useEffect, useState } from "react";
import { fetchComment } from "../utils/fetchComments";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    async function startFetching() {
      const json = await fetchComment(1);
      setComments(json);
    }
    startFetching();
  }, []);
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
