"use client"
import useCaptureImageStore from "@/app/store/captureImageStore"
import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from 'next/navigation';

export default function PokemonData() {
    let captureImg = useCaptureImageStore((state) => state.img)
    let router = useRouter()
    let [pokemonData, setPokemonData] = useState({
        name : null,
        picture : null,
        sprite : null,
        height : 0,
        weight : 0,
        types : [],
        stats : [],
        description : null
    })

    

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
    <div>
        <div className="flex h-52 gap-2 m-2">

            <div className="w-[30%] bg-gray-200 border grid grid-cols-1 ">
                <div className='border bg-red-500 m-2'>
                    <img src={captureImg} alt="" style={{width : "100%", height : "100%"}} />
                </div>

                <div className='border bg-blue-500 m-2'>
                    <img src={pokemonData?.sprite} alt="" style={{width : "100%", height : "100%"}} />
                </div>
            </div>
            
            <div className="w-[70%] bg-green-500 border">
                    <img src={pokemonData?.picture} alt="" style={{width : "100%", height : "100%"}} />
            </div>
        </div>

       
      
      

        <div className='grid grid-cols-2 border h-52'>
            <div className='border bg-red-500 m-1'>
                <div className="w-80 border m-auto  bg-green-200">
                    <h1 className="text-lg font-bold  ms-1">Name: <span className="text-blue-500 text-2xl">{pokemonData?.name}</span></h1>
                </div>

                <h1 className="text-lg font-bold text-sm ms-2">Types: </h1>
                <div className="w-80 border m-auto  bg-blue-200 flex justify-start ">
                    {
                        pokemonData?.types.map((type, index) => {
                            return <span  key={index} className="rounded-full bg-gray-500 text-white ring-2 ring-black m-1 mt-2 mb-2 px-2 text-xs"> {type} </span>
                        }) 
                    }
                </div>

                <div className="grid grid-cols-2 h-24 bg-white mt-2">
                    <div className='border m-1 bg-red-300'>
                        <h1 className="mt-2 font-bold text-2xl font-bold text-white  text-center"> Height </h1>
                        <h1 className=" font-bold text-3xl font-bold text-white  text-center"> {pokemonData?.height}<span className="text-sm">m </span> </h1>
                    </div>

                    <div className='border m-1 bg-blue-300'>
                        <h1 className="mt-2 font-bold text-2xl font-bold text-white  text-center">weight </h1>
                        <h1 className=" font-bold text-3xl font-bold text-white  text-center"> {pokemonData?.weight}<span className="text-sm">kg </span></h1>
                    </div>
                </div>
            </div>

            <div className='border bg-blue-500 m-1'>
                <h1 className="font-bold text-xl font-bold text-white  text-center"> Stats </h1>
                <hr />
                <div className=" m-auto h-42 bg-white grid grid-cols-2  ">

                    <div className="border  m-1">
                        <h1 className="text-center font-bold text-xs font-bold text-black"> Hp  </h1>
                        <h1 className="text-center text-xl text-center font-extrabold"> {pokemonData?.stats[0]?.stat} </h1>
                    </div>

                    <div className="border  m-1">
                        <h1 className="text-center font-bold text-xs font-bold text-black"> Stk   </h1>
                        <h1 className="text-center text-xl text-center font-extrabold"> {pokemonData?.stats[1]?.stat} </h1>
                    </div>

                    <div className="border  m-1">
                        <h1 className="text-center font-bold text-xs font-bold text-black"> Def  </h1>
                        <h1 className="text-center text-xl text-center font-extrabold"> {pokemonData?.stats[2]?.stat} </h1>
                    </div>

                    <div className="border  m-1">
                        <h1 className="text-center font-bold text-xs font-bold text-black"> Sp.Atk  </h1>
                        <h1 className="text-center text-xl text-center font-extrabold"> {pokemonData?.stats[3]?.stat} </h1>
                    </div>

                    <div className="border  m-1">
                        <h1 className="text-center font-bold text-xs font-bold text-black">  Sp.Def </h1>
                        <h1 className="text-center text-xl text-center font-extrabold"> {pokemonData?.stats[4]?.stat} </h1>
                    </div>

                    <div className="border  m-1">
                        <h1 className="text-center font-bold text-xs font-bold text-black">  Spd </h1>
                        <h1 className="text-center text-xl text-center font-extrabold"> {pokemonData?.stats[5]?.stat} </h1>
                    </div>
                </div>
            </div>
        </div>

    
        <div className="bg-gray-500  m-auto w-96 pt-1 pb-1 ">
            <h1 className="ms-3 font-bold text-lg font-extrabold text-black ">  Description </h1>
        </div>
        <div className='container  border h-36 bg-green-500 w-96 m-auto overflow-auto p-2'>
            <p className="ms-2 mt-2   text-black" > {pokemonData?.description} </p>
        </div>

        <div className='container  border h-52 bg-blue-500 w-96 m-auto '>
            <div className="container  bg-green-400 h-32 m-auto mt-2" style={{width : "95%"}}>
                    <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perspiciatis!</p>
            </div>

            <div className="container bg-green-400 h-14 m-auto mt-2 flex items-center justify-between px-4" style={{width: "95%"}}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="flex-grow mr-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                >
                    Search
                </button>
            </div>
        </div>


        <div className='container  border h-14 bg-gray-500 w-96 m-auto mb-3 flex justify-center place-items-center' onClick={()=>{router.push("/pages/pokedex")}}>
                <h1 className="text-center text-white text-3xl "> Back </h1>
        </div>

    </div>
    )
}
