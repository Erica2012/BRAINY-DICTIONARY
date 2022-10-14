import React, { FormEvent, useState } from "react";

const Search = ({setWord}) => {
  const [inputWord, setInputWord] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();  
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
      );
      const data = await res.json();
      setWord(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-sm mx-auto bg-white dark:bg-slate-400 border mt-10 border-purple-500 px-2 py-1 rounded-full flex">
        <input
          className="w-full outline-none px-2 bg-white text-slate-400 dark:bg-slate-400 dark:text-white text-xl"
          type="search"
          name="search"
          onChange={(e) => setInputWord(e.target.value)}
        />
        <button
          className=" bg-regal-blue text-white font-bold py-1 px-4 rounded-full"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
