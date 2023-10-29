import Image from "next/image";
import Container from "postcss/lib/container";
export default function Welcome() {
  return (
    <div className=" intro ml-5 mr-5 lg:mr-12 lg:ml-12 flex flex-col justify-center gap-20 items-center">
      <div>
        <div className=" pt-9 order-1 flex flex-col lg:flex-row">
          <Image
            src={"/About-us-svg-1.svg"}
            width={0}
            height={0}
            sizes={"100vh"}
            className=" min w-auto lg:w-[30rem] "
            alt="About-us svg1"
          ></Image>
          <div className=" lg:w-[50vw] lg:flex lg:flex-col pl-5 pr-5">
            <h1 className=" mt-5 text-[2.2rem] lg:text-[4rem] font-bold pb-3 text-[#F06]">
              About Us:
            </h1>
            <span className="text-[1rem] lg:text-[1.2rem]">
              <p className=" text-[1.25rem] lg:text-[1.5rem] text-[#4285F4]">
                CodeConnect is a platform by coders and for coders
              </p>
              <p>
                Here at CodeConnect, you can discuss your queries with other
                like minded people{" "}
              </p>
              <p>
                Filter out the clutter and only focus on queries related to your
                language of interest, using our Filtering system which allows
                you to only view what you wish to see
              </p>
              <p className=" pt-5">
                We are your one stop Decode, Discuss, and Delight: Your Coding
                Community!{" "}
              </p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className=" pt-9 order-1 flex flex-col lg:flex-row">
          <Image
            src={"/About-us-svg-2.svg"}
            width={0}
            height={0}
            sizes={"100vh"}
            className=" min w-auto lg:w-[30rem] "
            alt="About-us svg2"
          ></Image>
          <div className=" lg:w-[50vw] lg:flex lg:flex-col pl-5 pr-5">
            <h1 className=" mt-5 text-[2.2rem] lg:text-[4rem] font-bold text-[#F06] pb-3">
              What we Offer:
            </h1>
            <span className="text-[1rem] lg:text-[1.2rem]">
              <p className=" text-[#4285F4] text-[1.25rem] lg:text-[1.5rem]">
                Interactive Coding using CodeMirror:
              </p>
              <p>
                CodeMirror is a versatile, web-based text editor component
                designed to facilitate interactive coding. It provides a range
                of features and capabilities to enable developers and users to
                write and edit code in a web application or website.
              </p>
              <a href="https://codemirror.net/">
                <button
                  type="button"
                  className=" text-[1.2rem] mt-4 mb-[3rem] border-4 border-transparent lg:h-[3rem] lg:w-[9rem] bg-[#3F3D56] rounded-full hover:border-[#4285F4]"
                >
                  CodeMirror
                </button>
              </a>
              <br />
            </span>
            <span className="text-[1rem] lg:text-[1.2rem]">
              <p className=" text-[#4285F4] text-[1.25rem] lg:text-[1.5rem]">
                A Forum For everyone
              </p>
              <p>
                CodeConnect as a platform provides a forum for coders of all
                kinds The language barrier between people of different coding
                languauges can be daunting, to overcome this, we have a filter
                system in our forums so our users can only see relevant
                information
              </p>
            </span>
            <a href="/welcome">
              <button
                type="button"
                className=" text-[1.2rem] mt-4 mb-[3rem] border-4 border-transparent lg:h-[3rem] lg:w-[9rem] bg-[#3F3D56] rounded-full hover:border-[#4285F4]"
              >
                Forum
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
