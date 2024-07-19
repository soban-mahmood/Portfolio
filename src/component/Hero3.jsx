import React from "react";
import logo from "../../public/HTML-removebg-preview.png";
import logo2 from "../../public/CSS-removebg-preview.png";
import logo3 from "../../public/JS-removebg-preview.png";
import logo4 from "../../public/Tailwind-removebg-preview.png";
import logo5 from "../../public/React-removebg-preview.png";
import logo6 from "../../public/Fire_base-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: false,
  mirror: false,
});
function Hero3() {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="20"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className="w-full xl:flex   md:flex md:flex-col sm:flex sm:flex-col mt-10 p-10 items-center xl:justify-center text-white">
          <div className="flex flex-col flex-wrap ">
            <div className="items-center">
              <p className="font-semibold xl:text-[2vw] sm:text-[20px] text-[#0788FF]">
                Skills
              </p>
            </div>

            <div className=" sm:flex sm:flex-col flex sm:flex-wrap md:flex-wrap lg">
              <div className=" sm:w-full ">
                <p className="font-semibold   gap-2 ">
                  <img src={logo} alt="" className=" h-[290px]"/>
                </p>
              </div>
              <div className=" sm:w-full ">
                <p className="font-semibold  gap-2">
                  <img src={logo2} alt="" className="h-[290px]" />
                </p>
              </div>
              <div className=" sm:w-full ">
                <p className="font-semibold  gap-2 ">
                <img src={logo4} alt="" className="h-[290px] "/>
              
                </p>
              </div>
              <div className=" sm:w-full">
                <p className="font-semibold gap-2">
                <img src={logo3} alt="" className="h-[290px]"/>
             
                  
                </p>
              </div>
              <div className=" sm:w-full">
                <p className="font-semibold gap-2">
                <img src={logo5} alt="" className="h-[290px]" />
                </p>
              </div>
              <div className=" sm:w-full  ">
                <p className="font-semibold gap-2">
                <img src={logo6} alt="" className="h-[290px]" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero3;
