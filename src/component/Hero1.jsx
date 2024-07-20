import React from "react";
import logo from '../../public/bg (1).png'

function Hero1() {
  return (
    <div>
      <div className="border-t border-gray-500 h-screen">
        <div
          className=" xl:flex xl:justify-evenly xl:px-10  xl:items-center lg:flex lg:flex-col lg:justify-between lg:p-20 
                                         md:flex md:flex-col md:justify-between md:p-20 sm:p-10"
        >
          <div className=" xl:w-1/2  lg:w-full md:w-full sm:w-full">
            <p className="text-white font-bold  sm:w-full sm:text-[20px]  md:w-full md:text-[25px]  lg:w-full lg:text-[30px] xl:text-[30px] ">
              Hi, I'm Soban <br />
              <span className="text-[#0788FF]">Frontend Developer</span>
            </p>
            <p className="text-gray-400   sm:text-[13px] sm:w-full md:text-[16px] md:w-full lg:text-[20px] lg:w-full xl:text-[20px] "></p>
            <p className="text-gray-400   sm:text-[13px] sm:w-full md:text-[16px] md:w-full lg:text-[20px] lg:w-full xl:text-[20px] ">
              I am a skilled Front-End Developer with expertise in React.js,
              responsible for implementing interactive and visually appealing
              user interfaces. With a strong foundation in HTML, CSS, and
              JavaScript, I focus on creating responsive and <br />{" "}
              high-performance web applications.
            </p>
            <div className="flex gap-4  py-5 flex-wrap">
              <button className="bg-[#0788FF] text-white  rounded-full  hover:border-black border-[1px] px-6 py-2 ">
                <a href="https://github.com/soban-mahmood"> GitHub</a>
              </button>

              <button className="text-[#fff] border  py-2 px-6 rounded-full hover:border-[#0788FF] ">
                <a href="https://www.linkedin.com/in/soban-mehmood/">
                  LinkedIn
                </a>
              </button>

              <button>
                <a
                  href="../../public/cv.pdf"
                  download
                  className="bg-[#0788FF] text-white  rounded-full  hover:border-black border-[1px] px-6 py-3 "
                >
                  Download Resume
                </a>
              </button>
            </div>
          </div>
          <div className="xl:w-1/2 sm:w-full md:w-full lg:w-full ">
            <img
              className="h-[100%] w-[80%]  rounded-full"
              src={logo}
              alt="image description"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
