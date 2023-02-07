import React from "react";
import Kontor from '../images/kontor.jpg'
import Flytt from '../images/flytt.jpg'
import Window from '../images/window.jpg'

const Services = () => {
  return (
    <div id="services" className=" max-w-[1250px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%]  px-4 grid grid-cols-3 gap-4">
      <div className="  relative lg:col-span-1 col-span-3">
        <h3 className=" text-2xl font-bold">Våra Tjänster består av:</h3>
        <ul className=" pt-2">
          <li className=" text-xl py-1">Kontorstädning</li>
          <li className=" text-xl py-1">Storstädning</li>
          <li className=" text-xl py-1">Trappstädning</li>
          <li className=" text-xl py-1">Flyttstädning</li>
          <li className=" text-xl py-1">Fönsterputs</li>
        </ul>
      </div>

      <div className=" grid grid-cols-2 col-span-2 gap-2">
        <img className=" object-cover w-full h-[50%] sm:h-full row-span-1" src={Kontor} alt='Städning av kontor' />
        <img className=" object-cover w-full h-full row-span-2" src={Flytt} alt='Städning av kontor' />
        <img className=" object-cover w-full h-[50%] sm:h-full row-span-1" src={Window} alt='Städning av kontor' />
      </div>
    </div>
  );
};

export default Services;
