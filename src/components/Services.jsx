import React from "react";
import Kontor from '../images/kontor.jpg'
import Flytt from '../images/flytt.jpg'
import Window from '../images/window.jpg'

const Services = () => {
  return (
    <div className=" max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className=" lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className=" text-2xl font-bold">Våra Tjänster består av:</h3>
        <ul className=" pt-4">
          <li className=" text-xl py-2">Kontorstädning</li>
          <li className=" text-xl py-2">Storstädning</li>
          <li className=" text-xl py-2">Trappstädning</li>
          <li className=" text-xl py-2">Flyttstädning</li>
          <li className=" text-xl py-2">Fönsterputs</li>
        </ul>
      </div>

      <div className=" grid grid-cols-2 col-span-2 gap-2">
        <img className=" object-cover w-full h-full" src={Kontor} alt='Städning av kontor' />
        <img className=" object-cover w-full h-full row-span-2" src={Flytt} alt='Städning av kontor' />
        <img className=" object-cover w-full h-full" src={Window} alt='Städning av kontor' />
      </div>
    </div>
  );
};

export default Services;
