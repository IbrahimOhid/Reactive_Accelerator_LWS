import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
// import initialData from './data/apiData'

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const handleDeletePost = () => {};

  const handleEditPost = () => {};

  const fetchPostData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts");
      if (response && response.data) {
        setPosts(response.data);
      }
    } catch (err) {
      if (err.response) {
        setError(
          `Error From Server Status: ${err.response.status} - Message: ${err.response.data}`
        );
      } else {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <div className="mx-auto container">
      <div>
        <h1>API Request With Axios..</h1>
        <hr />{" "}
        <Posts
          posts={posts}
          onDeletePost={handleDeletePost}
          onEditPost={handleEditPost}
        />
        {error ? (
          <div className="mt-20">
            <hr />
            <h1 className="bg-pink-400 py-3 px-3">{error}</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
