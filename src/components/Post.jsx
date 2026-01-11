import { useState } from "react";
import useNewPost from "../hook/useNewPost";

const Post = ({datas}) => {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const { createNewPostData} = useNewPost();

  
    const handleAddNewPost = async (e) => {
    e.preventDefault();

    await createNewPostData({
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={handleAddNewPost}>
        <main className=" mx-auto p-4 mt-12  flex  items-center justify-center ">
          <input
            className=" p-2 mr-3 appearance-none  placeholder-gray-900 rounded border "
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className=" p-2 mr-3 appearance-none    placeholder-gray-900 rounded border "
            type="text"
            placeholder="Body"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button
            className=" bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-gray-900"
            type="submit"
          >
            ADD
          </button>
        </main>
      </form>
    </div>
  );
};

export default Post;
