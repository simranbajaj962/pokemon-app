import React, { useState } from "react";

const Search = ({ getInput }) => {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getInput(input.toLowerCase());
    setInput("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 flex mt-12 justify-between items-center border-2 border-gray-200 rounded-[28px]"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-100 ml-8 w-full outline-none py-2"
        placeholder="Search Pokemon"
      />

      <button type="submit">
        <svg
          className="mr-8"
          height="24"
          version="1.1"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:cc="http://creativecommons.org/ns#"
          xmlns:dc="http://purl.org/dc/elements/1.1/"
          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        >
          <g transform="translate(0 -1028.4)">
            <path
              d="m14.938 12.281-2.844 2.813 6.906 6.906 2.844-2.844-6.906-6.875z"
              fill="#95a5a6"
              transform="translate(0 1028.4)"
            />
            <path
              d="m15.562 1041.2c-0.473 1.3-1.472 2.4-2.75 2.9l2.188 2.3c1.16-0.7 2.137-1.7 2.812-2.9l-2.25-2.3z"
              fill="#7f8c8d"
            />
            <path
              d="m18 10a8 8 0 1 1 -16 0 8 8 0 1 1 16 0z"
              fill="#bdc3c7"
              transform="translate(0 1028.4)"
            />
            <path
              d="m15 10a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z"
              fill="#ecf0f1"
              transform="translate(0 1028.4)"
            />
          </g>
        </svg>
      </button>
    </form>
  );
};

export default Search;
