import axios from "axios";
import { useState } from "react";

const useNewPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  const createNewPostData = async () => {
    try {
      setLoading({ state: true, message: "Adding New Post Data" });
      const response = await axios.post(url, { posts });
      setPosts(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  return {
    createNewPostData,
    posts,
    loading,
    error,
  };
};

export default useNewPost;
