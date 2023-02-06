import React, { useState } from "react";
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className=" absolute  w-full flex justify-between p-4 items-center">
      <h1 className=" text-white font-bold  text-2xl  z-20 ">BellaStäd</h1>
      <RiMenuUnfoldLine
        size={35}
        className=" z-20 text-white  cursor-pointer"
        onClick={handleNav}
      />
      <div
        className={
          nav
            ? " fixed text-gray-300 left-0 top-0  w-full h-screen bg-black/80 px-4 py-7 flex-col z-10 ease-in duration-300"
            : " absolute  top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className=" flex flex-col fixed w-full h-full items-center justify-center">
          <li className=" font-bold text-3xl p-8 cursor-pointer"><a href="/" onClick={handleNav} >HEM</a></li>
          <li className=" font-bold text-3xl p-8 cursor-pointer"><a href="#about" onClick={handleNav} >OM OSS</a></li>
          <li className=" font-bold text-3xl p-8 cursor-pointer">TJÄNSTER</li>
          <li className=" font-bold text-3xl p-8 cursor-pointer">KONTAKT</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
