"use client"
import useCaptureImageStore from "@/app/store/captureImageStore"
import useFormData from "@/app/store/formDataStore"
import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

import usePokemonDataStore from "@/app/store/pokemonDataStore"
import PokemonPicture from "./components/pokemonPicture"
import PokemonAttributes from "./components/pokemonAttributes"
import PokemonDescription from "./components/pokemonDescription"
import PokemonChatBot from "./components/pokemonChatBot"
import ExitButton from "./components/exitButton"

import LoadingPage from "./components/laoding"
import ErrorPage from "./components/error"

export default function PokemonData() {
    let captureImg = useCaptureImageStore((state) => state.img)
    let formData = useFormData((state) => state.formData)
    let pokemonData = usePokemonDataStore((state) => state.pokemonData)
    let setPokemonData = usePokemonDataStore((state) => state.setPokemonData)

   console.log(formData)

    const [loading, setLoading] = useState(false)  
    const [error, setError] = useState(false)  
    
    const { mutate } = useMutation({
        mutationFn: (data) => axios.post("https://pokedex-backend-l6xn.onrender.com/getPokemonData", data),
        onSuccess: (response) => {
            console.log(response.data)
            setPokemonData(response.data)
            setLoading(false)  
            setError(false)
        },
        onError: (err) => {
            console.log(err)
            setLoading(false)  
            setError(true)
        }
    })

    useEffect(() => {
        if (formData) {
            setLoading(true)  
            mutate(formData)
        }
    }, [formData, mutate])

    if (loading) return <LoadingPage />
    if (error) return <ErrorPage />

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
