import React from 'react'
import Splash from '../images/dining.jpg'

const Hero = () => {
  return (
    <div className=' w-full h-screen'>
        <img className=' top-0 left-0 w-full h-screen object-cover' src={Splash} alt="Clean apartament" />
        <div className=' bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-white' >
            <div className=' md:left-[15%] max-w-[1100px] m-auto absolute p-4'>
                <p className=' max-w-[600px] drop-shadow-2xl py-2 text-3xl'>Vår team på</p>
                <h1 className=' font-bold text-7xl drop-shadow-2xl text-orange-100' >BellaStäd</h1>
                <p className=' max-w-[600px] drop-shadow-2xl py-2 text-3xl'>Håller din omgivning rent</p>
                <button className=' bg-orange-500 my-2' >Kontakta oss</button>
            </div>
        </div>
    </div>
  )
}

export default Hero