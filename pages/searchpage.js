import React from "react";
import { useState } from "react";
import { createContext } from "react";
// import ResultList from "./components/resultlist";
// import SearchPageHeader from "./components/searchpageheader";

//Create contextapi

export const InputContext = createContext();
import Search from "../components/Search";
import MeaningList from "../components/MeaningList";

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
