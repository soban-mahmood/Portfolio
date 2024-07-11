import React from "react";

function Header() {
  return (
    <div>
      <div className="fixed font-bold text-white w-full h-[5vh] py-8 px-20 font-['Neue Montreal'] flex justify-between items-center z-10 bg-transparent backdrop-blur-lg p-10">
        <div className="logo text-lg">
          <h1>Soban Mehmood</h1>
        </div>
        <div className="links flex gap-10 ">
          <a href="">GitHub</a>
          <a href="">LinkedIn</a>
          <a href="">Whatsapp</a>
          <a href="">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
