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
        <div className="grid grid-col-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-violet-500 bg-transparent sm:max-w-[900px] ">
          <div className="hidden md:block bg-transparent">
            <Image src="/images/loginNew.png" alt="" width={600} height={600} />
          </div>
          <div className="p-4 flex flex-col justify-center border shadow-sm mt-3 bg-white ">
            {/* <form className=" text-gray-600">
              <h2 className="text-4xl font-bold text-center text-gray-600 mb-8">
                Login
              </h2>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <div>
                <input
                  className=" border-2px p-2 t "
                  type="email"
                  placeholder="email"
                />
                <input
                  className=" p-2 "
                  type="password"
                  placeholder="password"
                />
              </div>
              

              <button className="w-full p y-2 my-4 rounded-full text-white bg-slate-700 hover:bg-slate-600">
                Login
              </button>
              <p>
                <input type="checkbox" className="text-gray-500" />
                Remember Me
              </p>
              <p className="text-center hover: text-violet-600 text-clip">
                Forgot Email or Password?
              </p>
            </form> */}
            <form className=" mt- " onSubmit={handleSubmit}>
              <h2 className="text-4xl font-bold text-center mb-8">Register</h2>
              {error && <span className="text-center text-sm text-red-500">{error}</span>}
              <div className="flex flex-col py-4">
                <input
                  className=" w-[120px] outline-none font-thin hover:shadow-inner rounded-full px-2"
                  type="text"
                  name="firstName"
                  placeholder="firstname"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className=" p-2 outline-none "
                  type="text"
                  placeholder="lastname"
                  name="lastName"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className=" p-2 outline-none "
                  type="email"
                  name="email"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="p-2 outline-none "
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className=" p-2 outline-none "
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
