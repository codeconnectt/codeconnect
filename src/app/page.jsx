import Image from "next/image";
import Link from "next/link";
export default function Home() {
	return (
		<div className="meshbg">
			<div className=" intro max-h-[10vh] flex flex-row justify-between m-0 items-center py-16 ">
				<a href={"/"}>
					<Image
						src={"/logo.svg"}
						width={0}
						height={0}
						sizes="100vw"
						className="p-7 min-w-[14rem] md:min-w-[22rem] lg:ml-6 lg:min-w-[23rem]"
						alt="Homepage Image"
					/>
				</a>
				<div className="flex gap-10 text-md  lg:text-xl ">
					<Link href="/about-us" className=" text-[1rem] lg:text-xl">
						About us
					</Link>
					<Link href="/support" className=" text-[1rem] lg:text-xl">
						Support
					</Link>
					<Image
						height={0}
						width={0}
						sizes="100vw"
						src={"/user.svg"}
					/>
				</div>
			</div>
			<hr></hr>
			<section className=" intro min-h-[90vh] max-h-[100vh] min-w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center p-20 gap-20 lg:gap-0 text-center lg:text-left">
				{" "}
				<div>
					<h1 className="font-bold text-5xl lg:text-7xl tracking-wider bg-transparent">
						Welcome to <br className="hidden lg:block"></br>
						<span className=" font-mono bg-transparent ">
							<span className=" text-[#F06] bg-transparent">
								Code
							</span>
							<span className=" bg-transparent text-cyan-600">
								Connect{" "}
							</span>{" "}
						</span>
					</h1>
					<p className="pt-10 text-2xl pb-10">
						Empower, Collaborate, Code: Join the CodeConnect
						Community🔥
					</p>
					<a
						href="/login"
						type="button"
						className=" a text-black bg-white hover:opacity-90 border-4 border-t-0 border-l-0 border-b-[#F06] border-r-[#F06]  focus:outline-none font-medium rounded-lg text-md  md:text-lg px-7 py-3.5  text-center inline-flex items-center mr-2 mb-2 "
					>
						Start Here!
					</a>
				</div>
				<Image
					src={"/homeimage.svg"}
					width={0}
					height={0}
					sizes="100vw"
					className=" w-fit max-w-[20rem]  lg:w-[40rem] lg:max-w-[40rem] bg-transparent order-first lg:order-last"
					alt="Homepage Image"
				/>
			</section>
		</div>
	);
}
