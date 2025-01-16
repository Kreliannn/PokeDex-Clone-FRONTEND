"use client"
import Image from "next/image";




export default function Home() {

  return (
    <div className="w-dvh h-dvh bg-red-300 bg-cover bg-center bg-no-repeat" style={{backgroundImage : "url('/pokemon_landingpage_bg.jpg')"}}>
     
      <br /> 
      <img 
        src="/pokemon_header.png" alt="no img"
        className='w-screen h-52 m-auto '  
      />
    </div>
  );
}
