import React, { useEffect, useState } from "react";
import { fetchingComment } from "../utils/fetchComments";

const Comments = ({postId}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false
    console.log('ddddddddd')
    async function startFetching() {
      const json = await fetchingComment(postId);
      if(!ignore){
        console.log('ibr')
        setComments(json);
      }
    }
    startFetching();
    return ()=>{
        ignore = true
    }
  },[postId]);
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
