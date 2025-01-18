"use client"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default  function PokemonContainer()
{
    
    let {data, isError, isLoading } = useQuery({
        queryKey : ['poke'],
        queryFn : () => axios.get("https://pokedex-backend-l6xn.onrender.com/getSprite")
    })
    
    console.log(data?.data)

    if(isError) return <h1> error </h1>
    if(isLoading) return <h1> loading/........... </h1>

    return(
        <div className="m-auto bg-white flex flex-wrap rounded justify-center mt-3 w-11/12 border h-36 overflow-scroll" >
            
            {
                data?.data.map((obj, index) => {
                    return(
                        <div key={index} className='w-screen border border-black h-24 flex justify-start items-center' style={{ backgroundColor : "whitesmoke"}}> 
                            <div className='h-24  w-24  bg-cover bg-center bg-no-repeat border border-black' style={{backgroundImage : "url('/pokemonbg2.jpg')"}}>
                                <img src={obj.sprite} alt="" className='h-24  w-24'/>    
                            </div>
                            
                            <h1 className='text-3xl ms-3 font-extrabold  ' style={{color : "#2A3335"}}> {obj.name} </h1>
                        </div>
                    )
                } )
            }


        </div>

    )
}