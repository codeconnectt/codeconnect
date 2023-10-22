import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
	title: "CodeConnect",
	description: "Find Your Code Companion and Connect, Learn, Excel Together",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="meshbg text-white">{children}</body>
		</html>
	);
}
