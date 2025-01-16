import Link from "next/link";



export default function Home() {


  return (
    <div className="w-dvh h-dvh bg-red-300 bg-cover bg-center bg-no-repeat" style={{backgroundImage : "url('/pokemon_landingpage_bg.jpg')"}}>
     
      <br /> 
      <img 
        src="/pokemon_header.png" alt="no img"
        className='w-screen h-52 m-auto '  
      />

      <Link 
        className=' rounded-full  text-lg  absolute bg-cover bg-center bg-no-repeat active:scale-125 bg-yellow- transition' style={{bottom : "5%", left : "0%", padding : "16%", backgroundImage : "url('/run_button.png')"}}
        href="/pages/pokedex"
      > </Link>    
    </div>
  );
}
