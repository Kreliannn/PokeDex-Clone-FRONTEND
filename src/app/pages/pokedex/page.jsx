"use client"
import Webcam from "react-webcam"
import { useRef, useState } from "react"
import useCaptureImageStore from "@/app/store/captureImageStore";
import { useRouter } from 'next/navigation';
import PokemonContainer from "./components/pokemonContainer";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useFormData from "@/app/store/formDataStore";
export default function Pokedex()
{
    let webcam = useRef(null)
    let router = useRouter()
    let setImg = useCaptureImageStore((state) => state.setImg)
    let setFormData = useFormData((state) => state.setFormData)

    let [ file, setFile ] = useState("")

    let captureImage = () => {

        const imageSrc = webcam.current.getScreenshot();

        // Convert the Base64 string to binary
        const byteString = atob(imageSrc.split(",")[1]);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uintArray = new Uint8Array(arrayBuffer);

        for (let i = 0; i < byteString.length; i++) {
        uintArray[i] = byteString.charCodeAt(i);
        }

        
        const file = new File([uintArray], "image.jpg", { type: "image/jpeg" });

        const formData = new FormData()

        formData.append("file", file)

        setFormData(formData)

        setImg(imageSrc)
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
                        screenshotFormat="image/jpeg"
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

                <PokemonContainer />
            </div>
            
                        
        </div>
    )
}