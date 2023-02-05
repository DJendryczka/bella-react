import React from "react";
import Image1 from "../images/clean.jpg";
import Image2 from "../images/happy.jpg";
import Image3 from "../images/main .jpg";
import Image4 from "../images/omoss.jpg";
import Image5 from "../images/dining.jpg";

const AboutInfo = () => {
  return (
    <div className=" max-w-[1400px]  m-auto my-8 py-16 px-4 grid lg:grid-cols-2 gap-4">
        {/* Right side */}
      <div className=" grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img src={Image1} alt="Clean bathroom" className=" object-cover w-full h-full p-2 row-span-3"/>
        <img src={Image5} alt="Clean bathroom" className=" object-cover w-full h-full p-2 row-span-2"/>
        <img src={Image3} alt="Clean bathroom" className=" object-cover w-full h-full p-2 row-span-2"/>
        <img src={Image4} alt="Clean bathroom" className=" object-cover w-full h-full p-2 row-span-3"/>
        <img src={Image2} alt="Clean bathroom" className=" object-cover w-full h-full p-2 row-span-2"/>
      </div>
      {/* Left side */}
      <div className=" flex flex-col h-full justify-center">
        <h3 className=" text-5xl  md:text-6xl font-bold">Vilka är vi?</h3>
        <p className=" text-2xl py-6">
          Bellastäd är ett modernt städföretag som har sin hemmabas i Malmö och
          många års erfarenhet inom städning. Vi utför tjänster för
          privatpersoner och företag.
        </p>
        <h3 className=" text-5xl  md:text-6xl font-bold">Varför välja oss</h3>
        <p className=" text-2xl py-6">
          Vi utför våra uppdrag proffesionellt, med engagemang samt
          flexibilitet. Vi lägger stort fockus på noggranhet.
        </p>

        <p className=" text-2xl py-6">
          När vi är ute på ett uppdrag, gör vi allt för att uppnå bästa
          resultat. Vår strävan är att kunden blir nöjd. För att uppnå det har
          vi hög kvalitetskontroll.
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
