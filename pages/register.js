import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";
import { Zoom } from "react-reveal";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const router = useRouter()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, data)
      router.push("/login")
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex bg-white/5 justify-center items-center bg-slate-300 dark:bg-slate-700  ">
        <div className="hidden mt-7 md:block bg-transparent">
          <Zoom top>
            <Image src="/images/loginNew.png" alt="" width={600} height={600} />
          </Zoom>
        </div>
        <div className="md:w-1/3 bg-white dark:bg-regal-blue  p-6 rounded-lg shadow-2xl  outline outline-violet-200 shadow-pink-500 dark:shadow-violet-500 ">

          <div className="p-3  mt-6 flex flex-col rounded-r-3xl  dark:bg-regal-blue   border shadow-sm  bg-white ">
            <Zoom bottom>
              <form onSubmit={handleSubmit}
                className='flex flex-col space-y-4 py-2 '>
                {error && <p>{error}</p>}
                <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">
                  Register
                </h2>
                <div className="space-y-5">
                  <div className="flex flex-col space-y-2">
                    <input
                      className=" w-full hover:shadow-inner rounded-full p-2 outline-none text-slate-600 bg-slate-100 dark:bg-slate-100"
                      type="text"
                      name="firstName"
                      placeholder="firstname"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className=" w-full hover:shadow-inner rounded-full p-2 outline-none text-slate-600 bg-slate-100 dark:bg-slate-100"
                      type="text"
                      placeholder="lastname"
                      name="lastName"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className=" w-full hover:shadow-inner rounded-full p-2 outline-none text-slate-600 bg-slate-100 dark:bg-slate-100"
                      type="email"
                      name="email"
                      placeholder="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className=" w-full hover:shadow-inner rounded-full p-2 outline-none text-slate-600 bg-slate-100 dark:bg-slate-100"
                      type="password"
                      name="password"
                      placeholder="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className=" w-full hover:shadow-inner rounded-full p-2 outline-none text-slate-600 bg-slate-100 dark:bg-slate-100"
                      type="password"
                      name="confirmPassword"
                      placeholder="confirm password"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button className="w-full mt-10 text-white text-xl my-4 bg-slate-400  hover:bg-slate-600 rounded-full">
                  Register
                </button>

                <div className="flex flex-row justify-around text-white">
                  <p>Register with 👉</p>
                  <p>
                    <BsFacebook />
                    Facebook
                  </p>
                  <p>
                    <FcGoogle />
                    Google
                  </p>
                </div>
              </form>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
