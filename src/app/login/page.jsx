"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import Image from "next/image";
import { useState } from "react";
export default function Login() {
  const [user, setUser] = useState(null);
  const handleClick = async () => {
    try {
      /*This function is for user authentication with firebase.It takes auth and provider as props from firebase.js file
		  and then the popup windoew opens up.Once sign in is done the response is console logged and user data is stored
		  in localstorage*/
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
      setUser(res.user);
      localStorage.setItem("user", JSON.stringify(res.user));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className=" max-h-[10vh] ">
        <Image
          src={"/logo.svg"}
          width={0}
          height={0}
          sizes="100vw"
          className="p-10 min-w-[17rem] md:min-w-[22rem] bg-transparent"
          alt="Homepage Image"
        />
      </div>
      <section className="min-h-[90vh] max-h-[100vh] min-w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center p-14 gap-20 lg:gap-0 text-center lg:text-left">
        {" "}
        <div>
          <h1 className="font-bold text-5xl lg:text-7xl tracking-wider bg-transparent">
            Sign-Up /
            <span className="bg-transparent ">
              <span className="font-bold text-[#F06] bg-transparent">
                LogIn
              </span>
              <br className=" hidden lg:block"></br>
              <span className=" bg-transparent text-cyan-600">Now! </span>{" "}
            </span>
          </h1>
          <p className="pt-10 bg-inherit text-2xl pb-10">
            Your Code Companion: Lets Connect, Learn, Excel Together 💪{" "}
          </p>
          <button
            type="button"
            onClick={handleClick}
            className=" text-black bg-white hover:opacity-90 border-4 border-t-0 border-l-0 border-b-[#F06] border-r-[#F06]  focus:outline-none font-medium rounded-lg text-md  md:text-lg px-7 py-3.5  text-center inline-flex items-center mr-2 mb-2 "
          >
            <Image
              src="google-logo.svg"
              height={0}
              width={0}
              alt="Google Logo"
              className="w-6 mr-3"
            ></Image>
            Continue with Google
          </button>
        </div>
        <Image
          src={"/login-image.svg"}
          width={0}
          height={0}
          sizes="100vw"
          className=" w-fit max-w-[20rem]  lg:w-[32rem] lg:max-w-[35rem] bg-transparent order-first lg:order-last"
          alt="Homepage Image"
        />
      </section>
    </div>
  );
}
