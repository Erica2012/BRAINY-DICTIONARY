import React, { FormEvent, useState } from "react";

const Search = ({setWord}) => {
  // const [searchWord, setSearchWord] = useState("");
  const [inputWord, setInputWord] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSearchWord(word)
    
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
      );
      const data = await res.json();
      setWord(data);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-sm mx-auto border mt-10 border-pink-500 px-2 py-1 rounded-full flex">
      
        <input
          className="w-full outline-none px-2 text-gray-700  text-xl"
          type="search"
          name="search"
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button
          className="bg-pink-500  text-white font-bold py-1 px-4 rounded-full"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
