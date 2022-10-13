import React from "react";

const Meaning = ({ meaning: { item, key } }) => {
  return (
    <div
      className={`mb-2 p-3 mr-5 ${
        key % 2 === 0
          ? "bg-slate-100 dark:bg-slate-300 dark:text-slate-600"
          : ""
      }`}
    >
      {item.meanings.map((meaning, idx) => (
        <div key={idx}>
          {/* Part of Speech */}
          <p className="text-2xl italic mb-1">{meaning.partOfSpeech}</p>

          {/* Definitions */}
          <div className="pl-10 mb-5  dark:bg-slate-300 dark:text-slate-600">
            <ol className="list-decimal space-y-2">
              {meaning.definitions.map((definition, idx) => (
                <div key={idx}>
                  <li>{definition.definition}</li>
                  {definition?.example && (
                    <p className="text-base  dark:text-pink-800 italic">
                      Example: {definition.example}
                    </p>
                  )}
                </div>
              ))}
            </ol>
          </div>

          {/* Synonyms  */}

          {meaning.synonyms.length > 0 && (
            <>
              <h3 className="my-1 italic">Synonyms</h3>
              <div className="pl-10 space-x-2 flex flex-wrap">
                {meaning.synonyms.map((synonym, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600 px-2.5 py-0.5 tracking-wider rounded-full text-white text-sm mb-2 font-semibold cursor-pointer"
                  >
                    {synonym}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* Antonyms  */}
          {meaning.antonyms.length > 0 && (
            <>
              <h3 className="my-1 italic">Antonyms</h3>
              <div className="pl-10 space-x-2 flex flex-wrap">
                {meaning.antonyms.map((antonym, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600 px-2.5 py-0.5 tracking-wider rounded-full text-white text-sm mb-2 font-semibold cursor-pointer"
                  >
                    {antonym}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Meaning;
