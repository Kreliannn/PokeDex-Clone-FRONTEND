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

      <button className=' rounded-full  text-lg  absolute bg-cover bg-center bg-no-repeat active:scale-125' style={{bottom : "7%", left : "-1%", padding : "14%", backgroundImage : "url('/run_button.png')"}}> </button>    
    </div>
  );
}
