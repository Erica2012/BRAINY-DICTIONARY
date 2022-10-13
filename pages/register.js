import React from "react";
import Image from "next/image";
import newbg1 from "../public/images/newbg1.jpg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import  axios from "axios"
import { useRouter } from "next/router";

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
      <div
        className="relative w-full h-screen bg-cover bg-no-repeat "
        style={{
          backgroundImage: `url(${newbg1.src})`,
        }}
      >
        <div className="grid grid-col-1 rounded-tl-none rounded-3xl  md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-violet-500 bg-transparent sm:max-w-[900px] ">
          <div className="hidden md:block mt-7 bg-transparent">
            <Image src="/images/loginNew.png" alt="" width={600} height={600} />
          </div>
          <div className="p-4 flex mt-6 rounded-r-3xl  flex-col justify-center border shadow-sm bg-white ">
            <form className="  " onSubmit={handleSubmit}>
              <h2 className="text-4xl font-bold text-center mb-8 text-yellow-400">Register</h2>
              {error && (
                <span className="text-center text-sm text-red-500">
                  {error}
                </span>
              )}
              <div className="flex flex-col space-y-2">
                <input
                  className=" w-full outline-none hover:shadow-inner rounded-full p-2"
                  type="text"
                  name="firstName"
                  placeholder="firstname"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="w-full outline-none hover:shadow-inner rounded-full p-2 "
                  type="text"
                  placeholder="lastname"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="w-full hover:shadow-inner rounded-full p-2 outline-none "
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className=" w-full hover:shadow-inner rounded-full p-2 outline-none "
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="w-full hover:shadow-inner rounded-full p-2 outline-none "
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  onChange={handleChange}
                />
              </div>

              <button className="w-full text-white p y-2 my-4 bg-slate-700  hover:bg-slate-600 rounded-full">
                Register
              </button>
              <div className="flex flex-row justify-around text-violet-700">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
