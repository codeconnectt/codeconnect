"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
	loadLanguage,
	langNames,
	langs,
} from "@uiw/codemirror-extensions-langs";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";

export default function Answer() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [code, setCode] = useState("console.log('hello world!');");
	const [anscode, setansCode] = useState(
		"console.log('Such nice of you to help this fine chap!');"
	);
	const [isTyping, setIsTyping] = useState(true);

	const handleExportCode = async () => {
		// Create a JSON object with the data
		const jsonData = {
			title: title,
			description: description,
			code: code,
		};
		alert(jsonData);
	};
	const handleExportCodeAns = async () => {
		// Create a JSON object with the data
		const jsonData = {
			title: title,
			description: description,
			code: code,
			langs: "javascript",
		};
		alert(JSON.stringify(jsonData));
	};

	const onChange = (val, viewUpdate) => {
		setCode(val);
	};

	const handleInputChange = (event) => {
		setIsTyping(false);
	};

	return (
		<div className="flex flex-col justify-center text-left mx-auto max-w-[175ch] gap-24 pt-10 p-7">
			<h1 className="font-bold text-4xl lg:text-8xl">Answer Doubts!</h1>
			<div className="flex flex-col lg:flex-row text-center lg:text-left min-h-[35vw] border-4 border-[#4285F4] rounded-xl justify-center gap-5 p-10 items-center ">
				<div className=" flex flex-col pr-10 items-center ">
					<Image
						src={"/logo.svg"}
						height={0}
						width={0}
						sizes="100vw"
						className=" rounded-full w-44  "
					></Image>
					<p className=" text-xl pt-4">Display Name</p>
				</div>
				<div className="h-[2px] bg-slate-300 w-full lg:hidden"></div>
				<div className="text-lg lg:text-2xl max-w-[90ch] flex gap-10 flex-col">
					<h2 className="font-bold pb-5 ">Error Name</h2>
					<p className="">
						{" "}
						Amet id dolore aute ut aliquip culpa magna minim
						reprehenderit elit laboris fugiat aliquip. Elit velit
						esse ullamco incididunt Lorem anim consectetur in eu
						adipisicing in amet. Ad duis labore exercitation id
						cillum nulla elit irure eu. Proident dolore deserunt
						consectetur dolore quis consectetur id consequat id
						irure sunt aliqua.{" "}
					</p>
					<CodeMirror
						value={code}
						className=" h-[20rem] rounded-md border-[2px] border-white text-base lg:text-xl leading-[10] tracking-wide font-medium"
						height="100%"
						onChange={onChange}
						extensions={[loadLanguage("java")]}
						theme={themes.vscodeDark}
						basicSetup={{
							foldGutter: true,
							dropCursor: true,
							allowMultipleSelections: true,
							indentOnInput: true,
							lineNumbers: true,
							lineWrapping: true,
							indentWithTabs: true,
							closeBrackets: true,
						}}
					/>{" "}
				</div>
			</div>
			{isTyping ? (
				<button
					className="bg-transparent border-2 border-[#FF0066] p-6 w-full outline-none rounded-full font-extralight text-md md:text-3xl text-slate-50 "
					type="text"
					onClick={handleInputChange}
				>
					Enter Answer here...
				</button>
			) : (
				<div className="text-center lg:text-left min-h-[35vw] border-4 border-[#4285F4] rounded-xl justify-center gap-5 p-10 items-center ">
					<span className="flex flex-col md:flex-row md:items-center">
						<h2 className="inline font-bold text-xl lg:text-4xl p-5 ">
							Title:{" "}
						</h2>
						<input
							placeholder="Enter Title here..."
							type="text"
							className="bg-transparent border-b-2 border-white p-2 w-full md:w-1/2 outline-none font-normal text-md md:text-3xl"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</span>
					<span className="flex md:items-center flex-col md:flex-row py-10">
						<h2 className="pb-5 inline font-bold text-xl lg:text-4xl lg:pr-5">
							Description:{" "}
						</h2>
						<textarea
							placeholder="Enter Description here..."
							type="text"
							className="bg-transparent border-2 border-white p-2 w-full h-auto lg:w-[40rem] lg:h-[10rem] rounded-xl outline-none font-normal text-md md:text-xl align-baseline"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</span>
					<CodeMirror
						value={anscode}
						className=" h-[20rem] rounded-md border-[2px] border-white text-base lg:text-xl leading-[10] tracking-wide font-medium"
						height="100%"
						onChange={onChange}
						extensions={[loadLanguage("java")]}
						theme={themes.vscodeDark}
						basicSetup={{
							foldGutter: true,
							dropCursor: true,
							allowMultipleSelections: true,
							indentOnInput: true,
							lineNumbers: true,
							lineWrapping: true,
							indentWithTabs: true,
							closeBrackets: true,
						}}
					/>{" "}
					<button onClick={handleExportCodeAns}>
						Export as JSON
					</button>
				</div>
			)}
		</div>
	);
}
