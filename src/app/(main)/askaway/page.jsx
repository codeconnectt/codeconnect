"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	loadLanguage,
	langNames,
	langs,
} from "@uiw/codemirror-extensions-langs";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import { v4 as uuidv4, v4 } from "uuid";
export default function Askaway() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [lang, setLangs] = useState();
	const [code, setCode] = useState("console.log('hello world!');");
	const [output, setOutput] = useState(null);
	const onChange = (val, viewUpdate) => {
		setCode(val);
	};
	const options = [
		{ value: "", text: "--Choose an option--" },
		{ value: "python", text: "Python" },
		{ value: "java", text: "Java" },
		{ value: "cpp", text: "C/C++" },
		{ value: "javascript", text: "Javascript" },
	];
	const [item, setItem] = useState();
	useEffect(() => {
		// Perform localStorage action
		setItem(JSON.parse(localStorage.getItem("user")));
	}, []);
	const [selected, setSelected] = useState(options[1].value);

	const handleChange = (event) => {
		console.log(event.target.value);
		setSelected(event.target.value);
	};

	const handleExportCode = async () => {
		// Create a JSON object with the data
		const uuidd = v4();
		var jsonn = {
			answer: {},
		};
		(jsonn[uuidd] = {
			title,
			description,
			code,
			lang: selected,
		}),
			// setOutput({ ...item, output: jsonData });
			localStorage.setItem(
				"user",
				JSON.stringify({ ...item, doubt: jsonn })
			);
		alert(JSON.stringify(jsonn));
		console.log(selected);
		router.push("/doubts");
	};

	const router = useRouter();

	return (
		<div className="flex flex-col justify-center text-left mx-auto max-w-[125ch] gap-24 pt-10 p-7">
			<h1 className="font-bold text-4xl lg:text-8xl">Ask Away!</h1>
			<span className="flex flex-col md:flex-row md:items-center">
				<h2 className="inline font-bold text-xl lg:text-4xl pr-5 pb-5">
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
			<span className="flex md:items-center flex-col md:flex-row">
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
			<h2 className="pb-5 inline font-bold text-xl lg:text-4xl lg:pr-5">
				Paste Your Code Bellow!
			</h2>
			<CodeMirror
				value={code}
				className=" h-[30rem] rounded-md border-[2px] border-white text-xl leading-[10] tracking-wide font-medium"
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
			<div className=" flex flex-col justify-center items-center">
				<button
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-1/5"
					onClick={handleExportCode}
				>
					Ask Away!
				</button>
			</div>
		</div>
	);
}
