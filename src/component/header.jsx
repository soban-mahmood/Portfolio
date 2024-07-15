import React from "react";
import { MdMenu } from "react-icons/md";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { GrLinkedin } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";

function Header() {
  const handleCross = () => {
    const navLog = document.getElementById("navLog");
    navLog.classList.toggle("hidden");
  };
  return (
    <nav className="p-2 xl:flex xl:justify-evenly xl:items-center xl-w-full  lg:flex lg:justify-between  md:flex md:justify-between  bg-[#000] text-white  sm:flex sm:justify-between sm:w-full ">
      <div id="navbrand" className="">
        <a href="/" className="text-[3vh] font-bold text-[#F4C32C]">
          Soban Mehmood
        </a>
      </div>
      <div className=" md:hidden sm:hidden lg:hidden   ">
        <a
          href=""
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          <a href="https://github.com/soban-mahmood"> GitHub</a>
        </a>
        <a
          href=""
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          <a href="https://www.linkedin.com/in/soban-mehmood/">LinkedIn</a>
        </a>
        <a
          href=""
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          <a href="https://wa.me/923340704343"> Whatsapp</a>
        </a>
        <a
          href="https://www.instagram.com/itx_soban_mehmood_official/"
          className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
        >
          Instagram
        </a>
      </div>
      <div className="gap-2 md:hidden sm:hidden lg:hidden md:hidden-2">
        <div className="flex gap-5">
          <a href="https://wa.me/923340704343">
            {" "}
            <FaWhatsapp className="text-[3vh] font-bold text-[#39eb39]" />
          </a>

          <a href="https://www.linkedin.com/in/soban-mehmood/">
            <GrLinkedin className="text-[3vh] font-bold text-[#3838d4] bg-white rounded" />
          </a>
         
        </div>
      </div>
      <div
        className=" xl:hidden lg:block p-2 bg-[#F4C32C] text-white"
        onClick={handleCross}
      >
        <MdMenu className="text-[3vh] " />
      </div>

      <div
        id="navLog"
        className=" fixed bg-[#000] inset-0  p-2   hidden"
        onClick={handleCross}
      >
        <div className="flex justify-between">
          <a href="#" className="text-[3vh] font-bold">
            Soban Mehmood
          </a>
          <RxCross2 className="text-[3vh] mt-2 md:block lg:block" />
        </div>

        <div className="flex flex-col">
          <a
            href="https://github.com/soban-mahmood"
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/soban-mehmood/"
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/923340704343"
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4"
          >
            Whatsapp
          </a>
          <a
            href="../../final cv.pdf"
            download
            className="font-medium hover:border-b-2 border-[#F4C32C] m-4 "
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
