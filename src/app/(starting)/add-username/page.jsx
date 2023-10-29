"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Login() {
	const [username, setUsername] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false); // State to track if the username is already taken

  const handleClick = async () => {};

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setUsername(inputText);
    setIsTyping(inputText.length > 0);
    setIsUsernameTaken(false);
  };

  const checkUsernameAvailability = async (username) => {
    try {
      const response = await fetch(`/api/users?username=${username}`);
      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
		<div className="intro">
			<section className="min-h-[90vh] max-h-[100vh] min-w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center p-14 gap-20 lg:gap-0 text-center lg:text-left intro">
				<div>
					<h1 className="font-bold text-5xl lg:text-7xl tracking-wider bg-transparent">
						Enter Username
					</h1>
					<input
						type="text"
						className="text-black mt-12 w-full bg-white hover:opacity-90 border-4 border-t-0 border-l-0 border-b-[#F06] border-r-[#F06] focus:outline-none font-medium rounded-lg text-md md:text-lg px-7 py-3.5 inline-flex items-center mr-2 mb-2"
						value={username}
						onChange={handleInputChange}
					/>
					{isTyping && (
						<>
							<button
								className="bg-blue-500 text-white font-medium rounded-lg text-md md:text-lg px-7 py-3.5 mt-4"
								onClick={handleClick}
								disabled={isUsernameTaken}
							>
								Submit
							</button>
							{isUsernameTaken && (
								<p className="text-red-500 mt-2">
									Username already exists. Please choose
									another username.
								</p>
							)}
						</>
					)}
				</div>
				<Image
					src={"/username.svg"}
					width={0}
					height={0}
					sizes="100vw"
					className="w-fit max-w-[20rem] lg:w-[32rem] lg:max-w-[35rem] bg-transparent order-first lg:order-last"
					alt="Homepage Image"
				/>
			</section>
		</div>
  );
}
