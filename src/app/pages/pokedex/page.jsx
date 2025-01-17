"use client"
import Webcam from "react-webcam"
import { useRef } from "react"
import useCaptureImageStore from "@/app/store/captureImageStore";
import { useRouter } from 'next/navigation';



export default function Pokedex()
{
    let webcam = useRef(null)
    let router = useRouter()
    let setImg = useCaptureImageStore((state) => state.setImg)

    let captureImage = () => {
        let img = webcam.current.getScreenshot()
        setImg(img)
        router.push("/pages/pokemonData")
    }
    

    return(
        <div className='w-dvh h-dvh bg-red-200 '>
            <div className='w-dvh h-3/5 bg-cover bg-center bg-no-repeat'  style={{backgroundImage : "url('/pokedexTop.jpg')"}}>
                <div className='bg-blue-500 m-auto relative  rounded overflow-hidden' style={{width : "96%", height : "80%", top: "22%"}}>
                    <Webcam 
                        ref={webcam}
                        width="100%"
                        height="100%"
                        videoConstraints={{
                            facingMode : "environment"
                        }}
                    />
                </div>
            </div>

            <div className='w-dvh h-2/5' style={{backgroundImage : "url('/pokedexBottom.jpg')"}}>

                <br />
                <div className='container m-auto border ring-4 ring-black rounded shadow-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex justify-center place-items-center w-10/12 h-24 ' onClick={captureImage}>
                    <h1 className="text-3xl text-yellow-500  tracking-wider font-extrabold" style={{  textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black", letterSpacing : "4px", transform : "scale(1)"}}>capture image</h1>
                </div>
                <br />
                <hr />
            </div>

         
        </div>
    )
}