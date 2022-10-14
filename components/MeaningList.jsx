import React, { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

import Meaning from '../components/Meaning';

const MeaningList = ({ word }) => {
  const [liked, setLiked] = useState(false);

  const handleOnClick = (savedWord) => {
    setLiked(!liked);
    console.log('savedword', savedWord);
    if (!liked) {
      if (localStorage.getItem('favourite')) {
        let existingWords = localStorage.getItem('favourite');
        existingWords = JSON.parse(existingWords);
        console.log('savedword', savedWord);
        if (existingWords.find((el) => el[0][0]?.word === savedWord[0]?.word)) {
          console.log('...found');

          return;
        } else {
          existingWords = [...existingWords, savedWord];
          existingWords = JSON.stringify(existingWords);
          localStorage.setItem('favourite', existingWords);
        }
      } else {
        localStorage.setItem('favourite', JSON.stringify([savedWord]));
      }
    } else {
    }
  };
  return (
    <div className="max-w-4xl mx-auto pl-16">
      <div className=" my-5">
        {word.length <= 0 && (
          <div className=" flex items-center justify-center bg-slate-100 dark:bg-regal-blue mr-4 min-h-[50vh]">
            <h1 class="text-slate-900 font-extrabold dark:font-serif sm:text-5xl lg:text-6xl text-sm tracking-tight text-center dark:text-white">
              Find the meaning of any word by typing the preferred word In the
              Search Box
            </h1>
          </div>
        )}
        <div className="flex justify-center  dark:bg-transparent items-end gap-5">
          <h1 className="text-4xl mt-5 font-semibold text-gray-600 dark:text-white">
            {word.length > 0 && word[0].word}
            <small className="text-blueGreen text-2xl">
              {word.length > 0 && word[0].phonetic}
            </small>
          </h1>
        </div>
        <div className="text-xl text-blueGreen mt-2 font-medium flex items-center justify-center gap-2"></div>
      </div>

      <div className="mt-3 text-left text-lg  ">
        {word.length > 0 && (
          <div className="flex items-center pb-4 ">
            <h2 className=" pr-3 inline text-left text-2xl font-semibold text-gray-600 dark:text-white">
              Definition
            </h2>
            <div
              onClick={() => {
                handleOnClick(word);
              }}
            >
              {liked ? (
                <BsHeartFill className="text-red-500 text-2xl cursor-pointer" />
              ) : (
                <BsHeart className="text-red-500 text-2xl cursor-pointer" />
              )}
            </div>
          </div>
        )}
        {word?.map((item, idx) => (
          <div key={idx}>
            <Meaning key={idx} meaning={{ item, key: idx }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeaningList;
