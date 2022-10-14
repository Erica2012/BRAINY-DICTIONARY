import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Search from "../components/Search";
import MeaningList from "../components/MeaningList";


export const InputContext = createContext();


const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <>
      <InputContext.Provider value={value}>
        <div>
          <Search />
          <MeaningList />
        </div>
      </InputContext.Provider>
    </>
  );
};

export default SearchPage;
