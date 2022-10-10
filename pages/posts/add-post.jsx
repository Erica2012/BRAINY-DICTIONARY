import React, { useState } from 'react';
import { AiOutlineComment } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { FaSadTear } from 'react-icons/fa';
import axios from 'axios';

const AddPost = () => {
  const [data, setData] = useState({
    title: '',
    body: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, data);
      router.push('/posts');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" flex bg-white/5 justify-center items-center  ">
      <div className=" bg-white w-full h-screen m-96 mt-7 p-4 rounded-lg shadow-2xl outline outline-indigo-100 ">
        <h3 className="text-violet-600 text-2xl items-center justify-center flex  font-bold mb-4">
          Add Comment
          <span className="mx-2">
            <AiOutlineComment className="text-pink-500 animate-bounce text-2xl duration-500" />
          </span>
        </h3>
        {error && (
          <p className="text-red-700 text-center flex  ">
            {error}
            <FaSadTear className="ml-2 text-2xl text-red-600 " />
          </p>
        )}
        <div className="first-letter:text-pink-700 justify-center items-center  flex flex-col ">
          <p className="first-letter:text-pink-700 font-semibold text-gray-600 justify-center ">
            Comment below if this app is good.
          </p>
          <p className="first-letter:text-pink-700 font-semibold text-gray-600 justify-center ">
            Suggest things we can do to improve the website
            <br /> and any other issues you are encountering.
          </p>
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 "
        >
          <div className="flex flex-col space-y-1 mt-5">
            <label htmlFor="title" className="font-semibold text-violet-600">
              Title
            </label>
            <input
              className="text-gray-600 rounded-lg px-2 py-1 outline-none bg-slate-200"
              type="text"
              placeholder="Title"
              name="title"
              id="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="body" className="font-semibold text-violet-600">
              Body
            </label>
            <textarea
              className="text-gray-600  rounded-lg px-2 py-1 outline-none bg-slate-200"
              placeholder="body"
              id="body"
              name="body"
              cols={30}
              rows={10}
              value={data.body}
              onChange={handleChange}
            />
          </div>
          <div className="items-center justify-center flex">
            <button
              type="submit"
              className="bg-pink-500 text-white  hover:text-white hover:outline hover:outline-violet-500 hover:bg-violet-600 rounded-lg px-3 py-1"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
