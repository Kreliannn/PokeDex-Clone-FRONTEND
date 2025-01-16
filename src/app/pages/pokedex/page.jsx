"use client"
import Webcam from "react-webcam"




export default function Pokedex()
{


    return(
        <div className='w-dvh h-dvh bg-red-200 '>
            <div className='w-dvh h-3/5 bg-cover bg-center bg-no-repeat'  style={{backgroundImage : "url('/pokedexTop.jpg')"}}>
                <div className='bg-blue-500 m-auto relative  rounded overflow-hidden' style={{width : "96%", height : "80%", top: "22%"}}>
                    <Webcam 
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>

            <div className='w-dvh h-2/5' style={{backgroundImage : "url('/pokedexBottom.jpg')"}}>

            </div>

         
        </div>
    )
}