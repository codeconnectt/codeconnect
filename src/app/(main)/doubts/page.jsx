import Image from "next/image";
export default function Doubts() {
	return (
		<div className="flex flex-col justify-center text-left mx-auto max-w-[125ch] gap-24 pt-10 p-7">
			<h1 className="font-bold text-4xl lg:text-8xl">Help Others!</h1>

			<div className="flex flex-col lg:flex-row text-center lg:text-left lg:h-[10rem] border-4 border-[#4285F4] rounded-xl justify-center gap-5 p-10 items-center ">
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
                <div className="h-[2px] bg-slate-300 w-full lg:hidden" ></div>
				<div className=" text-2xl max-w-[50ch]">
					<h2 className="font-bold pb-5 ">Error Name</h2>
					<p className=" line-clamp-1">
						{" "}
						Amet id dolore aute ut aliquip culpa magna minim
						reprehenderit elit laboris fugiat aliquip. Elit velit
						esse ullamco incididunt Lorem anim consectetur in eu
						adipisicing in amet. Ad duis labore exercitation id
						cillum nulla elit irure eu. Proident dolore deserunt
						consectetur dolore quis consectetur id consequat id
						irure sunt aliqua.{" "}
					</p>
				</div>
			</div>
		</div>
	);
}
