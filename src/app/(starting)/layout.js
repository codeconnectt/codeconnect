import { Inter } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import Link from "next/link";
export default function welcome({ children }) {
  return (
    <html lang="en" className="bg-[#1D1D1D] meshbg">
      <body className=" text-white scroll-smooth intro">
        <div className="max-h-[10vh] flex flex-row justify-between m-0 items-center py-16 ">
          <a href={"/"}>
            <Image
              src={"/logo.svg"}
              width={0}
              height={0}
              sizes="100vw"
              className="p-7 min-w-[14rem] md:min-w-[22rem] lg:ml-6 lg:min-w-[23rem] "
              alt="Homepage Image"
            />
          </a>
          <div className="flex gap-10 text-md  lg:text-xl ">
            <Link href="/about-us" className=" text-[1rem] lg:text-xl ">
              {/* hover isnt working */}
              {/* hover: text-[#F06] */}
              About
            </Link>
            <Link href="/support" className=" text-[1rem] lg:text-xl ]">
              Support
            </Link>
            {/* <Link href="/documentations" className=" text-[1rem] lg:text-xl">
              Documents
            </Link> */}
            <Image height={0} width={0} sizes="100vw" src={"/user.svg"} />
          </div>
        </div>
        <hr></hr>
        {children}
      </body>
    </html>
  );
}
