import Image from "next/image";
export default function Home() {
	return (
    <div className="meshbg">
      <div className="max-h-[10vh]">
        <Image
          src={"/logo.svg"}
          width={0}
          height={0}
          sizes="100vw"
          className=" p-7 min-w-[17rem] ml-16 md:min-w-[22rem] lg:min-w-[23rem] bg-transparent"
          alt="Homepage Image"
        />
      </div>
      <section className="min-h-[90vh] max-h-[100vh] min-w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center p-20 gap-20 lg:gap-0 text-center lg:text-left">
        {" "}
        <div>
          <h1 className="font-bold text-5xl lg:text-7xl tracking-wider bg-transparent">
            Welcome to <br className="hidden lg:block"></br>
            <span className=" font-mono bg-transparent ">
              <span className=" text-[#F06] bg-transparent">Code</span>
              <span className=" bg-transparent text-cyan-600">
                Connect{" "}
              </span>{" "}
            </span>
          </h1>
          <p className="pt-10 text-2xl pb-10">
            Empower, Collaborate, Code: Join the CodeConnect Community🔥
          </p>
          <button
            type="button"
            className=" text-black bg-white hover:opacity-90 border-4 border-t-0 border-l-0 border-b-[#F06] border-r-[#F06]  focus:outline-none font-medium rounded-lg text-md  md:text-lg px-7 py-3.5  text-center inline-flex items-center mr-2 mb-2 "
          >
            Start Here!
          </button>
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
