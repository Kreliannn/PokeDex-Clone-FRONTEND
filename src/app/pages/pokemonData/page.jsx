"use client"
import useCaptureImageStore from "@/app/store/captureImageStore"
import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

import usePokemonDataStore from "@/app/store/pokemonDataStore"
import PokemonPicture from "./components/pokemonPicture"
import PokemonAttributes from "./components/pokemonAttributes"
import PokemonDescription from "./components/pokemonDescription"
import PokemonChatBot from "./components/pokemonChatBot"
import ExitButton from "./components/exitButton"


export default function PokemonData() {
    let captureImg = useCaptureImageStore((state) => state.img)
    let pokemonData = usePokemonDataStore((state) => state.pokemonData)
    let setPokemonData = usePokemonDataStore((state) => state.setPokemonData)

   

    const [loading, setLoading] = useState(false)  
    
    const { mutate } = useMutation({
        mutationFn: (data) => axios.post("http://localhost:4000/getPokemonData", { img: data }),
        onSuccess: (response) => {
            console.log(response.data)
            setPokemonData(response.data)
            setLoading(false)  
        },
        onError: (err) => {
            console.log(err)
            setLoading(false)  
        }
    })

    useEffect(() => {
        if (captureImg) {
            setLoading(true)  
            mutate("pikachu")
        }
    }, [captureImg, mutate])

    if (loading) return <h1>loading..............</h1>

    return (
    <div className='bg-white'>
        
        <div className="w-screen  bg-cover bg-center bg-no-repeat mb-3" style={{backgroundImage : "url('/pokeTop.png')", height : "150px",position : "absolute", top : "0%"}}> </div>
        <br /><br /><br /><br /> <br /> <br />
        <PokemonPicture />

        <PokemonAttributes />
        
        <PokemonDescription />

        <PokemonChatBot />
        <ExitButton />        

    </div>
    )
}
