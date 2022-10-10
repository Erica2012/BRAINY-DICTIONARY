import React from "react";
import Image from "next/image";
import newbg1 from "../public/images/newbg1.jpg";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

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
      <div
        className="relative w-full h-screen bg-cover bg-no-repeat  "
        style={{
          backgroundImage: `url(${newbg1.src})`,
        }}
      >
        <div className="grid grid-col-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-violet-500 bg-transparent sm:max-w-[900px] ">
          <div className="hidden md:block bg-transparent">
            <Image src="/images/logn.png" alt="" width={600} height={600} />
          </div>
          <div className="p-4 flex flex-col justify-center border shadow-sm mt-3 bg-white ">
            <form onSubmit={handleSubmit}>
              {error && <p>{error}</p>}
              <h2 className="text-4xl font-bold text-center mb-8 text-gray-500">
                Login
              </h2>
              <div>
                <input
                  className=" p-2 outline-none"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className=" p-2 outline-none"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              {/* {status === "authenticated" ? ( <button onClick={() => signOut ({ callbackUrl: "/"})}> logout</button> )} */}
              <button className="w-full text-white p y-2 my-4 bg-slate-700  hover:bg-slate-600 rounded-full">
                Login
              </button>
              <p className="text-violet-500 cursor-pointer">
                Remind me <input className="text-pink-500 " type="checkBox" />
              </p>

              <div className="flex flex-row justify-around text-violet-700">
                <p className="hover:scale-110 duration-200 cursor-pointer">
                  Forgot email or password?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
