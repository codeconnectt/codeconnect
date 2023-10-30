"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
	loadLanguage,
	langNames,
	langs,
} from "@uiw/codemirror-extensions-langs";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";

export default function Answer() {
	const options = [
		{ value: "", text: "--Choose an option--" },
		{ value: "python", text: "Python" },
		{ value: "java", text: "Java" },
		{ value: "cpp", text: "C/C++" },
		{ value: "javascript", text: "Javascript" },
	];
	const [selected, setSelected] = useState(options[1].value);

	const handleChange = (event) => {
		console.log(event.target.value);
		setSelected(event.target.value);
	};
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [code, setCode] = useState("console.log('hello world!');");
	const [anscode, setansCode] = useState(
		"console.log('Such nice of you to help this fine chap!');"
	);
	const [ans1code, setans1Code] = useState("print('hello world')");

	const [isTyping, setIsTyping] = useState(true);
	const [item, setItem] = useState();
	useEffect(() => {
		// Perform localStorage action
		setItem(JSON.parse(localStorage.getItem("user")));
	}, []);
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
					<img
						src={item ? item.photoURL : ""}
						height={0}
						width={0}
						sizes="100vw"
						className=" rounded-full w-44  "
					></img>
					<p className=" text-xl pt-4">
						{item ? item.displayName : ""}
					</p>
				</div>
				<div className="h-[2px] bg-slate-300 w-full lg:hidden"></div>
				<div className="text-lg lg:text-2xl max-w-[90ch] flex gap-10 flex-col">
					<h2 className="font-bold pb-5 "> My amazing doubt!</h2>
					<p className="">
						So python print is not working, help me, bellow is my
						code:
					</p>
					<CodeMirror
						value={code}
						className=" h-[20rem] rounded-md border-[2px] border-white text-base lg:text-xl leading-[10] tracking-wide font-medium"
						height="100%"
						extensions={[loadLanguage("javascript")]}
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
							readOnly: true,
						}}
					/>{" "}
				</div>
			</div>
			<div className="flex flex-col lg:flex-row text-center lg:text-left min-h-[35vw] border-4 border-[#4285F4] rounded-xl justify-center gap-5 p-10 items-center ">
				<div className=" flex flex-col pr-10 items-center ">
					<img
						src="https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-146315.jpg"
						height={0}
						width={0}
						sizes="100vw"
						className=" rounded-full w-44  "
					></img>
					<p className=" text-xl pt-4">Jackson j</p>
				</div>
				<div className="h-[2px] bg-slate-300 w-full lg:hidden"></div>
				<div className="text-lg lg:text-2xl max-w-[90ch] flex gap-10 flex-col">
					<h2 className="font-bold pb-5 "> Your answer</h2>
					<p className="">
						So python print is not working, because your syntax is
						for javascript, here is the fixed code
					</p>
					<CodeMirror
						value={ans1code}
						className=" h-[20rem] rounded-md border-[2px] border-white text-base lg:text-xl leading-[10] tracking-wide font-medium"
						height="100%"
						extensions={[loadLanguage("python")]}
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
							readOnly: true,
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
				<div className="text-center lg:text-left min-h-[35vw] border-4 border-red-700 rounded-xl justify-center gap-5 p-10 items-center ">
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
					<span className="flex md:items-center flex-col md:flex-row">
						<h2 className="pb-5 inline font-bold text-xl lg:text-4xl lg:pr-5">
							Select Languages:{" "}
						</h2>
						<select
							value={selected}
							onChange={handleChange}
							className="block py-2.5 px-0 w-full text-xl  text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
						>
							{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.text}
								</option>
							))}
						</select>
					</span>
					<CodeMirror
						value={anscode}
						className=" h-[20rem] rounded-md border-[2px] border-white text-base lg:text-xl leading-[10] tracking-wide font-medium"
						height="100%"
						onChange={onChange}
						extensions={[loadLanguage(selected)]}
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
					<div className=" flex flex-col justify-center items-center m-5">
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-1/5"
							onClick={handleExportCode}
						>
							Answer Away!
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
