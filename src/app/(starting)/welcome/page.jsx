"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Welcome() {
	var item;
	useEffect(() => {
		// Perform localStorage action
		item = localStorage.getItem("user");
	}, []);
	const [selectedLanguages, setSelectedLanguages] = useState([]);

	const toggleLanguage = (language) => {
		if (selectedLanguages.includes(language)) {
			// If the language is already selected, remove it from the array
			setSelectedLanguages(
				selectedLanguages.filter((lang) => lang !== language)
			);
		} else {
			// If the language is not selected, add it to the array
			setSelectedLanguages([...selectedLanguages, language]);
		}
	};
	const handleLogSelectedLanguages = () => {
		console.log("Selected Languages:", selectedLanguages);
	};
	return (
		<div className="intro">
			<div className="flex flex-col justify-between p-10 lg:flex-row text-center md:text-left items-center lg:p-16">
				<div>
					<h1 className="text-5xl border-b-4 border-[#C62368] lg:text-7xl font-bold pb-5">
						Welcome{" "}
						{JSON.parse(localStorage.getItem("user")).displayName}
					</h1>
					<h3 className="text-xl pt-5">
						Choose which languages you are comfortable with
					</h3>
					<div className="text-xl font-bold flex flex-col lg:flex-row pt-10 gap-10">
						{["Python", "JavaScript", "Java", "C++"].map(
							(language) => (
								<button
									key={language}
									type="button"
									className={`border-4 border-transparent lg:h-[4rem] lg:w-[9rem] bg-[#3F3D56] rounded-full hover:border-[#C62368] ${
										selectedLanguages.includes(language)
											? "bg-[#C62368] text-white"
											: ""
									}`}
									onClick={() => toggleLanguage(language)}
								>
									{language}
								</button>
							)
						)}
					</div>
					<a href="/askaway">
						<button
							type="button"
							className=" text-center mt-5 text-4xl font-bold border-4  border-transparent lg:h-[4rem] lg:w-[9rem] bg-[#3F3D56] rounded-full hover:bg-[#C62368]"
							onClick={handleLogSelectedLanguages}
						>
							→
						</button>
					</a>
				</div>
				<Image
					src="/WelcomePageWoman.svg"
					width={0}
					height={0}
					sizes="100vw"
					className="w-fit h-auto bg-transparent justify-end order-first lg:max-w-[40rem] lg:w-[38rem] lg:h-[36rem] lg:order-last"
					alt="Homepage Image"
				></Image>
			</div>
		</div>
	);
}
