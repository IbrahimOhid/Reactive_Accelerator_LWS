import React, { useState } from "react";

const Form = () => {
    const [addData, setAddData] = useState({
        title : "",
        body: ""
    });

    const handleInputChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }

  return (
    <div>
      <main className=" mx-auto p-4 mt-12  flex  items-center justify-center ">
        <input
          className=" p-2 mr-3 appearance-none  placeholder-gray-900 rounded border "
          type="text"
          placeholder="Title"
          name="title"
          value={addData.title}
          onChange={handleInputChange}
        />
        <input
          className=" p-2 mr-3 appearance-none    placeholder-gray-900 rounded border "
          type="text"
          placeholder="Body"
          name="body"
          value={addData.body}
          onChange={handleInputChange}
        />
        <button
          className=" bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-gray-900"
          type="submit"
        >
          ADD
        </button>
      </main>
    </div>
  );
};

export default Form;
