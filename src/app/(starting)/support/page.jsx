import Image from "next/image";
export default function Welcome() {
	return (
		<div className="intro">
			<div className="flex flex-col justify-between p-10 lg:flex-row text-center md:text-left items-center lg:p-16">
				<div>
					<h1 className="text-4xl border-b-4 border-[#C62368] lg:text-7xl font-bold pb-3">
						Documentations:
					</h1>
					<h3 className="text-xl pt-5">
						Documentations for all languages that we support:
					</h3>
					<div className="text-xl font-bold flex flex-col lg:flex-row pt-10 gap-10">
						<button type="button"></button>
					</div>
					<div className="flex flex-col lg:flex-row justify-between gap-8">
						<a href="https://www.python.org/doc/">
							<button
								type="button"
								className=" h-[3rem] w-[12rem] text-center mt-0 lg:mt-5 text-xl font-bold border-4  border-transparent lg:h-[4rem] lg:w-[9rem] bg-[#3F3D56] rounded-full hover:bg-[#C62368]"
							>
								Python
							</button>
						</a>
						<a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
							<button
								type="button"
								className=" h-[3rem] w-[12rem] text-center mt-5 text-xl font-bold border-4  border-transparent lg:h-[4rem] lg:w-[9rem] bg-[#3F3D56] rounded-full hover:bg-[#C62368]"
							>
								JavaScript
							</button>
						</a>
						<a href="https://docs.oracle.com/en/java/">
							<button
								type="button"
								className=" h-[3rem] w-[12rem] text-center mt-5 text-xl font-bold border-4  border-transparent lg:h-[4rem] lg:w-[9rem] bg-[#3F3D56] rounded-full hover:bg-[#C62368]"
							>
								Java
							</button>
						</a>
						<a href="https://cplusplus.com/doc/tutorial//">
							<button
								type="button"
								className=" h-[3rem] w-[12rem] text-center mt-5 text-xl font-bold border-4  border-transparent lg:h-[4rem] lg:w-[9rem] bg-[#3F3D56] rounded-full hover:bg-[#C62368]"
							>
								C++
							</button>
						</a>
					</div>
				</div>
				<Image
					src="/documentations.svg"
					width={0}
					height={0}
					sizes="100vw"
					className="w-fit h-auto bg-transparent justify-end order-first lg:max-w-[40rem] lg:w-[38rem] lg:h-[36rem] lg:order-last"
					alt="Homepage Image"
				></Image>
			</div>
			<div className="flex flex-col justify-between p-10 lg:flex-row text-center md:text-left items-center lg:p-16">
				<div>
					<h1 className="text-4xl border-b-4 border-[#C62368] lg:text-7xl font-bold pb-3">
						Ask a Professional:
					</h1>
					<h3 className="text-xl pt-5 lg:w-[30vw]">
						In case of complicated problems that you cannot find
						answers to, ask one of our many trained professionals
					</h3>
					<div className="text-xl font-bold flex flex-col lg:flex-row pt-10 gap-10">
						<button type="button"></button>
					</div>
					<div className="flex flex-col lg:flex-row justify-between gap-8">
						<a href="mailto:ashmit27j@gmail.com?subject=SUBJECT&body=BODY">
							<button
								type="button"
								className=" h-[3rem] w-[12rem] text-center mt-0 lg:mt-5 text-xl font-bold border-4  border-transparent lg:h-[4rem] lg:w-[12rem] bg-[#3F3D56] rounded-full hover:bg-[#C62368]"
							>
								Contact Now!
							</button>
						</a>
					</div>
				</div>
				<Image
					src="/support-svg-2.svg"
					width={0}
					height={0}
					sizes="100vw"
					className="w-fit h-auto bg-transparent justify-end order-first lg:max-w-[40rem] lg:w-[38rem] lg:h-[36rem] lg:order-last"
					alt="Homepage Image"
				></Image>
			</div>
			<div className="flex flex-col justify-between p-10 lg:flex-row text-center md:text-left items-center lg:p-16">
				<div>
					<h1 className="text-4xl border-b-4 border-[#C62368] lg:text-7xl font-bold pb-3">
						Report a Bug:
					</h1>
					<h3 className="text-xl pt-5 lg:w-[30vw]">
						If out website has a bug, please do report it! Your
						feedback is much appreciated.
					</h3>
					<div className="text-xl font-bold flex flex-col lg:flex-row pt-10 gap-10">
						<button type="button"></button>
					</div>
					<div className="flex flex-col lg:flex-row justify-between gap-8">
						<a href="mailto:ashmit27j@gmail.com?subject=SUBJECT&body=BODY">
							<button
								type="button"
								className=" h-[3rem] w-[9.5rem] text-center mt-0 lg:mt-5 text-xl font-bold border-4  border-transparent lg:h-[4rem] lg:w-[9rem] bg-[#F06] rounded-full hover:bg-[red]"
							>
								Report!
							</button>
						</a>
					</div>
				</div>
				<Image
					src="/support-svg-3.svg"
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
