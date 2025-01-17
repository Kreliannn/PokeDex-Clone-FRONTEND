import usePokemonDataStore from "@/app/store/pokemonDataStore"


export default function PokemonAttributes()
{
    let pokemonData = usePokemonDataStore((state) => state.pokemonData)


    return(
    <div className='grid grid-cols-2  h-52 mb-2'>
        <div className=' rounded m-1'>
            <div className="w-80  m-auto ">
                <h1 className="text-lg font-bold  ms-1 text-black">Name: <span className="text-yellow-500 text-2xl" style={{textShadow: "-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black"}}>{pokemonData?.name}</span></h1>
            </div>

            <hr className='bg-black border-0 mb-1' style={{height : "1px"}}/>

            <h1 className="text-lg font-bold text-sm ms-1 text-black">Types: </h1>
            <div className="w-80  m-auto  flex justify-start ">
                {
                    pokemonData?.types.map((type, index) => {
                        return <span  key={index} className="rounded-full bg-gray-500 text-white ring-2 ring-black m-1 mt-2 mb-2 px-2 text-xs"> {type} </span>
                    }) 
                }
            </div>

            <hr className='bg-black border-0' style={{height : "1px"}}/>

            <div className="grid grid-cols-2 h-24 mt-2">
                <div className='m-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-lg border border-black rounded'>
                    <h1 className="mt-2 font-bold text-2xl font-bold  text-white  text-center" > Height </h1>
                    <h1 className=" font-bold text-3xl font-bold  text-white  text-center"> {pokemonData?.height}<span className="text-sm">m </span> </h1>
                </div>

                <div className='m-1 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700  shadow-lg border border-black rounded '>
                    <h1 className="mt-2 font-bold text-2xl font-bold   text-white text-center">weight </h1>
                    <h1 className=" font-bold text-3xl font-bold   text-white  text-center"> {pokemonData?.weight}<span className="text-sm">kg </span></h1>
                </div>
            </div>
        </div>

        <div className='  m-1'>
            <h1 className="font-extrabold text-2xl font-bold text-red-500  text-center"> Stats </h1>
            <hr className='mb-1 mt-1' />
            <div className=" m-auto h-42  grid grid-cols-2  ">

                <div className="border  bg-white shadow-lg  m-1" style={{backgroundColor : "whitesmoke"}}>
                    <h1 className="text-center font-bold text-xs font-bold text-black" style={{color : "#2A3335"}} > Hp  </h1>
                    <h1 className="text-center text-xl text-center font-extrabold"  style={{color : "#2A3335"}}> {pokemonData?.stats[0]?.stat} </h1>
                </div>

                <div className="border bg-white shadow-lg  m-1" style={{backgroundColor : "whitesmoke"}}>
                    <h1 className="text-center font-bold text-xs font-bold text-black" style={{color : "#2A3335"}}> Stk   </h1>
                    <h1 className="text-center text-xl text-center font-extrabold" style={{color : "#2A3335"}}> {pokemonData?.stats[1]?.stat} </h1>
                </div>

                <div className="border bg-white shadow-lg  m-1" style={{backgroundColor : "whitesmoke"}}>
                    <h1 className="text-center font-bold text-xs font-bold text-black" style={{color : "#2A3335"}}> Def  </h1>
                    <h1 className="text-center text-xl text-center font-extrabold" style={{color : "#2A3335"}}> {pokemonData?.stats[2]?.stat} </h1>
                </div>

                <div className="border bg-white shadow-lg  m-1" style={{backgroundColor : "whitesmoke"}}>
                    <h1 className="text-center font-bold text-xs font-bold text-black" style={{color : "#2A3335"}}> Sp.Atk  </h1>
                    <h1 className="text-center text-xl text-center font-extrabold" style={{color : "#2A3335"}}> {pokemonData?.stats[3]?.stat} </h1>
                </div>

                <div className="border bg-white shadow-lg  m-1" style={{backgroundColor : "whitesmoke"}}>
                    <h1 className="text-center font-bold text-xs font-bold text-black" style={{color : "#2A3335"}}>  Sp.Def </h1>
                    <h1 className="text-center text-xl text-center font-extrabold" style={{color : "#2A3335"}}> {pokemonData?.stats[4]?.stat} </h1>
                </div>

                <div className="border bg-white shadow-lg  m-1" style={{backgroundColor : "whitesmoke"}}>
                    <h1 className="text-center font-bold text-xs font-bold text-black" style={{color : "#2A3335"}}>  Spd </h1>
                    <h1 className="text-center text-xl text-center font-extrabold" style={{color : "#2A3335"}}> {pokemonData?.stats[5]?.stat} </h1>
                </div>
            </div>
        </div>
    </div>
    )
}