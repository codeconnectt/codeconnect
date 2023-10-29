"use client";
import React from "react";
// import MonacoEditor from "react-monaco-editor";
import { useState } from "react";
import { database } from "@/lib/firebase";
import { db } from "@/lib/firebase";

import {
	loadLanguage,
	langNames,
	langs,
} from "@uiw/codemirror-extensions-langs";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";

export default function Askaway() {
	const [value, setValue] = React.useState("console.log('hello world!');");
	const onChange = React.useCallback((val, viewUpdate) => {
		setValue(val);
	}, []);
	// => "jsx" | "typescript" | "javascript" | "tsx"
	var codeJson;
	var revertcode;
	const handleExportCode = () => {
		codeJson = JSON.stringify(value, null, 2);
		// You can do something with the JSON data, e.g., send it to an API or display it in an alert
		db.collection("test").add({
			name: "John Doe",
			email: "john@example.com",
		});
		alert(codeJson);
	};

	return (
		<div className=" flex flex-col justify-center text-left mx-auto max-w-[125ch] gap-24 pt-10 p-7 ">
			<h1 className=" font-bold text-4xl lg:text-8xl ">Ask Away!</h1>
			<span className="flex flex-col md:flex-row md:items-center">
				<h2 className=" inline font-bold text-xl lg:text-4xl pr-5 pb-5 ">
					Title:{" "}
				</h2>
				<input
					placeholder="Enter Title here..."
					type="text"
					className="bg-transparent border-b-2 border-white p-2 w-full md:w-1/2 outline-none font-normal  text-md md:text-3xl "
				></input>
			</span>
			<span className=" flex md:items-center flex-col md:flex-row">
				<h2 className="  pb-5 inline font-bold text-xl lg:text-4xl lg:pr-5">
					Description:{" "}
				</h2>
				<textarea
					placeholder="Enter Description here..."
					type="text"
					className="bg-transparent border-2 border-white p-2 w-full h-auto lg:w-[40rem] lg:h-[10rem] rounded-xl outline-none font-normal text-md md:text-xl align-baseline "
				></textarea>
			</span>
			<CodeMirror
				value={revertcode}
				className=" h-[30rem] ronded-md border-[2px] border-white text-xl  leading-[10] tracking-wide   font-medium"
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
			/>
			<button onClick={handleExportCode}>Export as JSON</button>
			<CodeMirror
				value={value}
				className=" h-[30rem] rounded-md border-[2px] border-white text-xl  leading-[10] tracking-wide   font-medium"
				height="100%"
				onChange={onChange}
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
				}}
			/>
		</div>
	);
}
