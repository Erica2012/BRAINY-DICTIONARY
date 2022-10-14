import React from "react";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Zoom from 'react-reveal/Zoom';


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result.error) {
      setError(result.error);
    } else {
      router.push(router.query.redirect || "/");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex bg-white/5 justify-center items-center bg-slate-300 dark:bg-slate-700  ">
        <div className="hidden mt-7 md:block bg-transparent">
          <Zoom top>
            <Image src="/images/logn.png" alt="" width={600} height={600} />
          </Zoom>
        </div>
        <div className="md:w-1/3 bg-white dark:bg-regal-blue  p-6 rounded-lg shadow-2xl  outline outline-violet-200 shadow-pink-500 dark:shadow-violet-500 ">

          <div className="p-6  mt-6 flex flex-col rounded-r-3xl  dark:bg-regal-blue   border shadow-sm  bg-white ">
            <Zoom bottom>
              <form onSubmit={handleSubmit}
                className='flex flex-col space-y-4 py-2 '>
                {error && <p>{error}</p>}
                <h2 className="text-4xl font-bold text-center mb-8 text-yellow-500">
                  Login
                </h2>
                <div className="space-y-5">
                  <div>
                    <input
                      className=" w-full hover:shadow-inner rounded-full p-2 outline-none text-slate-600 bg-slate-100 dark:bg-slate-100"
                      type="email"
                      name="email"
                      placeholder="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="  w-full hover:shadow-inner rounded-full p-2 outline-none text-slate-600 bg-slate-100 dark:bg-slate-100"
                      type="password"
                      placeholder="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <button className="w-full mt-10 text-white text-xl my-4 bg-slate-400  hover:bg-slate-600 rounded-full">
                  Login
                </button>
                <p className="text-violet-500  cursor-pointer">
                  Remind me <input className="text-pink-500 " type="checkBox" />
                </p>

                <div className="flex flex-row justify-around text-purple-500 dark:text-violet-300">
                  <p className="hover:scale-110 duration-200 cursor-pointer">
                    Forgot email or password?
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

export default Login;



