import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
export default function welcome({ children }) {
	return (
		<html lang="en" className="bg-[#1D1D1D]">
			<body className=" text-white scroll-smooth intro">
				<div className="max-h-[10vh] flex flex-row justify-between m-0 items-center py-16 ">
					<Image
						src={"/logo.svg"}
						width={0}
						height={0}
						sizes="100vw"
						className="p-7 lg:ml-14 min-w-[14rem] md:min-w-[22rem] lg:min-w-[23rem]"
						alt="Homepage Image"
					/>
					<div className="flex gap-10 text-md  lg:text-xl ">
						<Link href="/doubts">Doubts</Link>
						<Link href="/profile">Profile</Link>
						<Image
							height={0}
							width={0}
							sizes="100vw"
							src={"/user.svg"}
						/>
					</div>
				</div>
				<hr></hr>
				{children}
			</body>
		</html>
	);
}
