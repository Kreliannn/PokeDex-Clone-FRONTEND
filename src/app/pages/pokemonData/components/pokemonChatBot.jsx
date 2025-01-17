"use client"
import usePokemonDataStore from "@/app/store/pokemonDataStore"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

export default function PokemonChatBot()
{
    let pokemonData = usePokemonDataStore((state) => state.pokemonData)
    
    let [bot, setBot] = useState("you can ask me anything about " + pokemonData.name)
    let [message, setMessage] = useState("")

    let mutation = useMutation({
        mutationFn : (data) => axios.post("https://pokedex-backend-l6xn.onrender.com", { prompt : data}),
        onSuccess : (response) => setBot(response.data),
        onError : (err) => alert(err.response.data)
    })

    let submit = () => {
        let prompt = `act as pokedex and answer the question about ${pokemonData.name} make it simple and short. the question is ${message}`
        mutation.mutate(prompt)
        setBot("please  wait...........")
    }
 
    return(
    <div className='container  border h-52 bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-lg w-96 m-auto rounded'>
        <div className="container  bg-white h-32 m-auto mt-2 overflow-auto" style={{width : "95%", backgroundColor : "whitesmoke"}}>
                <p className="m-2 text-lg"> {bot} </p>
        </div>

        <div className="container bg-gray-600 rounded h-14 m-auto mt-2 flex items-center justify-between px-4" style={{width: "95%"}}>
            <input 
                type="text" 
                placeholder="Search..." 
                className="flex-grow mr-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button 
                className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700  text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                onClick={submit}
            >
                Search
            </button>
        </div>
    </div>
    )
}