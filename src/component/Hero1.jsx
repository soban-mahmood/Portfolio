import React from "react";
const logo = "../../public/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: false,
  mirror: false,
});
function Hero1() {
  return (
    <div>
      <div className="border-t border-gray-500">
        <div
          className="  bg-[#000] xl:flex xl:justify-evenly xl:px-10  xl:items-center lg:flex lg:flex-col lg:justify-between lg:p-20 
                                         md:flex md:flex-col md:justify-between md:p-20 sm:p-10"
        >
          <div className=" xl:w-1/2 lg:w-full md:w-full sm:w-full">
            <p className="text-white font-bold  sm:w-full sm:text-[20px]  md:w-full md:text-[25px]  lg:w-full lg:text-[30px] xl:text-[30px] ">
              Hi, I'm Soban <br />
              <span className="text-[#F4C32C]">Frontend Developer</span>
            </p>
            <p className="text-gray-400   sm:text-[13px] sm:w-full md:text-[16px] md:w-full lg:text-[20px] lg:w-full xl:text-[20px] "></p>
            <p className="text-gray-400   sm:text-[13px] sm:w-full md:text-[16px] md:w-full lg:text-[20px] lg:w-full xl:text-[20px] ">
              I am a skilled Front-End Developer with expertise in React.js,
              responsible for implementing interactive and visually appealing
              user interfaces. With a strong foundation in HTML, CSS, and
              JavaScript, I focus on creating responsive and <br />{" "}
              high-performance web applications.
            </p>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="2000"
              className="flex gap-4  py-5"
            >
              <button className="bg-[#F4C32C] text-black  rounded-full  hover:border-black border-[1px] px-6 py-2 ">
                <a href="https://github.com/soban-mahmood"> GitHub</a>
              </button>

              <button className="text-[#Ffff] border  py-2 px-6 rounded-full hover:border-[#F4C32C] ">
                <a href="https://www.linkedin.com/in/soban-mehmood/">
                  LinkedIn
                </a>
              </button>
            </div>
          </div>
          <div className="xl:w-1/2 sm:w-full md:w-full lg:w-full ">
            <img
              className="h-full w-full object-cover"
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
