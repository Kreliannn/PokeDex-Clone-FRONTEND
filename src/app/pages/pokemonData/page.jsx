"use client"
import useCaptureImageStore from "@/app/store/captureImageStore"
import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"


export default function PokemonData()
{
    let captureImg = useCaptureImageStore((state) => state.img)
    let [a, setA] = useState("")
    
    let { mutate, isLoading} = useMutation({
        mutationFn : (data) => axios.post("http://localhost:4000/", { img : data}),
        onSuccess : (response) => {
           
            setA(response.data)
        },
        onError : (err) => {
            console.log(err)
        }
    })

    useEffect(() => {
        mutate(captureImg)
    }, [])

    if(isLoading) return <h1> loading.............. </h1>
    
    return(
        <div>
            {(a) ? <img src={a} alt="" /> : <h1> none </h1>}
            
        </div>
    )
}