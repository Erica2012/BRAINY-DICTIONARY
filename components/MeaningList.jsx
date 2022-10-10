import axios from "axios";
import React, { useEffect, useState } from "react";
import {BsHeart, BsHeartFill} from "react-icons/bs"
// import { Howl } from "howler";

import Meaning from "../components/Meaning";

const MeaningList = ({word}) => {
  

  // const toggleFavourite = async () => {
  //   const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/add-favourite`)
  // }

  

  return (
    <div className="max-w-4xl mx-auto bg-white">
      <div>
        <div className="flex justify-center items-end gap-5">
          <h1 className="text-4xl mt-5 font-semibold text-gray-600">
            {word.length > 0 && word[0].word}
            <small className="text-blueGreen text-2xl">
              {word.length > 0 && word[0].phonetic}
            </small>
          </h1>
          <BsHeartFill className="text-red-500 text-2xl cursor-pointer" />
        </div>
        <div className="text-xl text-blueGreen mt-2 font-medium flex items-center justify-center gap-2">
        </div>
      </div>

      <h2 className="text-left text-2xl font-semibold text-gray-600">
        Definition
      </h2>

      <div className="mt-3 text-left text-lg ">
        {word?.map((item, idx) => (
          <Meaning key={idx} meaning={{ item, key: idx }} />
        ))}
      </div>
    </div>
  );
};

export default MeaningList;
