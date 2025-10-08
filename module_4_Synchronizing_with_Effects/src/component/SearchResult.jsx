import React, { useState } from "react";

const SearchResult = () => {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)
  return (
    <div className="text-center py-10">
      <div className="mb-3">
        <input value={query} onChange={(e)=> setQuery(e.target.value)} className="border" type="text" />
      </div>
      <hr />
      <div className="my-5">
        <ul className="flex justify-center gap-3">
          <li className="bg-amber-300 w-8">
            <button onClick={()=> setPage(1)}>1</button>
          </li>
          <li className="bg-amber-300 w-8">
            <button onClick={()=> setPage(2)}>2</button>
          </li>
          <li className="bg-amber-300 w-8">
            <button onClick={()=> setPage(3)}>3</button>
          </li>
          <li className="bg-amber-300 w-8">
            <button onClick={()=> setPage(4)}>4</button>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default SearchResult;
