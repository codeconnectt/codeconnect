"use client";
import React, { useState } from "react";
import {
	loadLanguage,
	langNames,
	langs,
} from "@uiw/codemirror-extensions-langs";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";

export default function Askaway() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [code, setCode] = useState("console.log('hello world!');");

	const onChange = (val, viewUpdate) => {
		setCode(val);
	};

	const handleExportCode = async () => {
		// Create a JSON object with the data
		const jsonData = {
			title: title,
			description: description,
			code: code,
		};

		try {
			// Send the JSON data to the public URL of your JSON file
			const response = await fetch(
				"https://firebasestorage.googleapis.com/v0/b/codeconnect-b37bd.appspot.com/o/data.json?alt=media&token=0900ef28-a70a-4acb-a223-0ed7dba1ee37",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(jsonData),
					mode: "no-cors",
				}
			);
			console.log(response);
			if (response.ok) {
				alert("Data exported and updated in the JSON file");
			} else {
				alert("Failed to update the JSON file.");
			}
		} catch (error) {
			console.error("An error occurred: ", error);
			alert("An error occurred while exporting data.");
		}
	};

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
			<CodeMirror
				value={code}
				className=" h-[30rem] rounded-md border-[2px] border-white text-xl leading-[10] tracking-wide font-medium"
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
			<button onClick={handleExportCode}>Export as JSON</button>
		</div>
	);
}
