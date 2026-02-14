import React from 'react'
import { fetchPost } from '../api/fetchPosts'
const resource = fetchPost("https://jsonplaceholder.typicode.com/posts");

const PostSelector = () => {
    
  return (
    <div>PostSelector</div>
  )
}

export default PostSelector