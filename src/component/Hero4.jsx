import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: false,
  mirror: false,
});
function Hero4() {
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
        <div className="w-full xl:flex   md:flex md:flex-col sm:flex sm:flex-col mt-10 p-10 items-center text-white">
          <div className="flex flex-col flex-wrap">
            <div className="">
              <p className="font-semibold xl:text-[2vw] sm:text-[20px] text-[#F4C32C]">
           Projects
              </p>
            </div>

            <div className=" sm:flex sm:flex-col">
              <div className=" sm:w-full ">
                <p className="font-semibold text-[20px] sm:text-[16px] flex gap-2 flex-row">
                 Furni Design | Using Reactjs & Tailwind Css
                </p>
                <span>
                  <a href="https://furni-design.vercel.app/">https://furni-design.vercel.app/</a>
                  </span>
              </div>
              <div className=" sm:w-full mt-4">
              <p className="font-semibold text-[20px] sm:text-[16px] flex gap-2 flex-row">
              Ochi Design | Using Reactjs & Tailwind Css
                </p>
                <span>
                <a href="https://ochi-clone-ayh9hw622-soban-mehmoods-projects.vercel.app/">https://ochi-clone-ayh9hw622-soban-mehmoods-projects.vercel.app/</a>
                  </span>
              </div>
              <div className=" sm:w-full mt-4">
              <p className="font-semibold text-[20px] sm:text-[16px] flex gap-2 flex-row">
                Sundown Studio| Using Html5 | Css |JavaScript
                </p>
                <span>
                <a href="https://soban-mahmood.github.io/Sundown-studio-clone/">https://soban-mahmood.github.io/Sundown-studio-clone/</a>
                  </span>
            
              </div>
              <div className=" sm:w-full mt-4">
              <p className="font-semibold text-[20px] sm:text-[16px] flex gap-2 flex-row">
               Boot Camp | Using Html5 & Bootstrap
                </p>
                <span>
                  <a href="https://bootstrap-clone-five.vercel.app/">https://bootstrap-clone-five.vercel.app/</a>
                  </span>
              </div>
              <div className=" sm:w-full mt-4">
              <p className="font-semibold text-[20px] sm:text-[16px] flex gap-2 flex-row">
                Spotify Clone| Using Html5 | Css |JavaScript
                </p>
                <span>
                <a href="https://soban-mahmood.github.io/Spotify-clone/">https://soban-mahmood.github.io/Spotify-clone/</a>
                  </span>
            
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero4
