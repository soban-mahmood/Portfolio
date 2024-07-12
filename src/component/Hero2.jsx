import React from "react";
import { IoSchool } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import { BsFillHouseAddFill } from "react-icons/bs";

function Hero2() {
  return (
    <div className=" text-white">
      <div>
        <div class="w-full xl:flex  xl:justify-center md:flex md:flex-col sm:flex sm:flex-col mt-10 p-10 items-center">
          <div class="flex flex-col flex-wrap">
            <div class="">
              <h2 class="font-semibold xl:text-[2vw] sm:text-[20px] text-[#F4C32C]">
                Work Experience
              </h2>
            </div>

            <div class=" sm:flex sm:flex-col">
              <div class=" sm:w-full xl:mr-4">
                <h3 class="font-semibold text-[20px] sm:text-[16px] flex gap-2">
                  Corvit System | Faisalabad
                  <IoSchool className="font-semibold xl:text-[2vw] sm:text-[20px] text-[#F4C32C] " />
                  <a href="https://corvitfsd.com/">corvitfsd.com</a>
                </h3>
                <span>Web Developer</span>
                <p class="text-gray-600 ">
                  Successfully Completed Web Development course in 6 months
                  acquiring Proficiency in Html, Css, Tailwindcss , |Bootstrap,
                  Material user interface (MUI). JavaScript, JQuery, Reactjs,
                  and other essential technologies such as git/github ,
                </p>
              </div>
              <div class=" sm:w-full mt-4">
                {/* <img src={logo4} alt="" /> */}
                <h3 class="font-semibold text-[20p flex gap-2">
                  Vonix-soft | Faisalabad
                  <FaHouseUser className="font-semibold xl:text-[2vw] sm:text-[20px] text-[#F4C32C]" />
                  <a href="https://www.linkedin.com/company/vonixsoft/mycompany/">
                    @vonix-soft
                  </a>
                </h3>
                <span>React-JS Developer</span>

                <p class="text-gray-600 ">
                  Completing a two-month internship at Vonix-Soft as a web
                  developer with a focus on ReactJs is a commendable
                  achievement.
                </p>
              </div>
              <div class=" sm:w-full mt-4">
                {/* <img src={logo4} alt="" /> */}
                <h3 class="font-semibold text-[20p flex gap-2 ">
                  Digix Well | Faisalabad
                  <BsFillHouseAddFill className="font-semibold xl:text-[2vw] sm:text-[20px] text-[#F4C32C]" />
                  <a href="https://www.linkedin.com/in/digix-well/">
                    @digixwell
                  </a>
                </h3>
                <span>React-JS Developer</span>
                <p class="text-gray-600 ">
                  Part Time Frontend Developer using Reactjs and their Core
                  Concepts To deliver The Dynamic user Interfaces.
                </p>
                <p class="text-gray-600 ">
                  Work as a Seniour WrodPress developer
                </p>
              </div>
              <div class=" sm:w-full mt-4">
                {/* <img src={logo4} alt="" /> */}
                <h3 class="font-semibold text-[20p flex gap-2">
                  Code Alpha
                  <FaHouseUser className="font-semibold xl:text-[2vw] sm:text-[20px] text-[#F4C32C]" />
                  <a href="https://www.linkedin.com/company/codealpha/posts/?feedView=all">
                    @codealpha
                  </a>
                </h3>
                <span>React-JS Developer</span>
                <p class="text-gray-600 ">
                  Starting a new postion at Code alpha as a Frontend Developer
                  with a Giving Services on ReactJs is a commendable
                  achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
