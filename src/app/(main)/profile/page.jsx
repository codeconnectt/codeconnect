"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Doubts() {
	const [item, setItem] = useState();
	useEffect(() => {
		// Perform localStorage action
		setItem(JSON.parse(localStorage.getItem("user")));
	}, []);

	return (
		<div className="flex flex-col justify-center text-left mx-auto max-w-[125ch] gap-24 pt-10 p-7">
			<h1 className="font-bold text-4xl lg:text-8xl">Your Profile!</h1>
			<div className=" flex flex-row">
				<img
					src={item ? item.photoURL : ""}
					className=" rounded-full w-34 m-4   "
				></img>
				<p className=" text-xl lg:text-4xl pt-4 self-center">
					{item ? item.displayName : ""}
				</p>
			</div>
			<h1 className="font-bold text-4xl lg:text-8xl">Your Doubts!</h1>
			<div className="flex flex-col lg:flex-row text-center lg:text-left lg:h-[10rem] border-4 border-[#4285F4] rounded-xl justify-center gap-5 p-10 items-center ">
				<div className=" flex flex-col pr-10 items-center ">
					<img
						src={item ? item.photoURL : ""}
						className=" rounded-full w-14  "
					></img>
					<p className=" text-xl pt-4">
						{item ? item.displayName : ""}
					</p>
				</div>
				<div className="h-[2px] bg-slate-300 w-full lg:hidden"></div>

				<div className=" text-2xl max-w-[50ch]">
					<a href="/answer" className="font-bold pb-5 ">
						My amazing doubt!
					</a>
					<p className=" line-clamp-1">
						{" "}
						Python is not printing, I have tried everything
						including reinstalling compiler
					</p>
				</div>
			</div>
		</div>
	);
}
