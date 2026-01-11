import axios from "axios";
import { useEffect, useState } from "react";

const useGetPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState({ state: false, message: "" });
  const [error, setError] = useState(null);

  const fetchPostData = async () => {
    try {
      setLoading({ state: true, message: "Finding Post Data" });
      const response = await axios.get(url);
      setDatas(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    fetchPostData();
  }, []);
  return {
    datas,
    loading,
    error,
  };
};

export default useGetPost;
