import React from "react";
import logo from '../../public/html.png'
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
        data-aos-anchor-placement="top-center">
        <div className="w-full xl:flex   md:flex md:flex-col sm:flex sm:flex-col mt-10 p-10 items-center xl:justify-center text-white">
          <div className="flex flex-col flex-wrap ">
            <div className="">
              <p className="font-semibold xl:text-[2vw] sm:text-[20px] text-[#0788FF]">
                Skills
              </p>
            </div>

            <div className=" sm:flex sm:flex-col ">
              <div className=" sm:w-full ">
                <p className="font-semibold text-[20px] sm:text-[16px]  gap-2 ">
                <span>
                    <img src={logo} alt="" />
                  
                  </span>
               
                 
                </p>
              </div>
              <div className=" sm:w-full mt-4">
                <p className="font-semibold text-[20p] flex gap-2">
                  Cascading Style Sheets (Css)
                  <span>
                    90%
                  
                  </span>
                </p>
              </div>
              <div className=" sm:w-full mt-4">
                <p className="font-semibold text-[20p] flex gap-2 ">
                  Syntactically Awesome Style Sheets (Saas)
                  <span>
                    
                  </span>
                </p>
              </div>
              <div className=" sm:w-full mt-4">
                <p className="font-semibold text-[20p] flex gap-2">
                  BootStrap
                  <span>
                  
                  </span>
                </p>
              </div>
              <div className=" sm:w-full mt-4">
                <p className="font-semibold text-[20p] flex gap-2">
                  Tailwind Css
                  <span>
                   
                  </span>
                </p>
              </div>
              <div className=" sm:w-full mt-4">
                <p className="font-semibold text-[20p] flex gap-2">
                  JavaScript (Js)
                  <span>
                  
                  </span>
                </p>
              </div>
              <div className=" sm:w-full mt-4 flex gap-3">
                <p className="font-semibold text-[20p] flex gap-2">
                  React Js
                  <span>
                   
                  </span>
                </p>
              </div>
              <div className=" sm:w-full mt-4">
                <p className="font-semibold text-[20p] flex gap-2">
                  Wordpress Development
                  <span>
                   
                  </span>
                </p>
                <p className="font-semibold text-[20p] flex gap-2">
                  Ecommerace Development
                  <span>
                   
                  </span>
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
