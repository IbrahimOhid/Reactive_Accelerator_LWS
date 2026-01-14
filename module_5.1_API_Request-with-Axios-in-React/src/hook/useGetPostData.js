import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetPostData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const fetchGetPostData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Finding Post Data...",
      });
      const response = await axios.get(apiUrl);
      setPosts(response.data)
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    fetchGetPostData();
  }, []);
  return {
    posts,
    loading,
    error,
  };
};

export default useGetPostData;
