import usePokemonDataStore from "@/app/store/pokemonDataStore"


export default function PokemonDescription()
{
    let pokemonData = usePokemonDataStore((state) => state.pokemonData)


    return(
        <div className="mb-2">
            <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-lg  m-auto w-96 pt-1 pb-1 ">
                <h1 className="ms-3 font-bold text-lg font-extrabold text-white tracking-widest " >  Description </h1>
            </div>
            <div className='container  border border-black shadow-lg h-36  w-96 m-auto overflow-auto p-2 ' style={{backgroundColor : "whitesmoke"}}>
                <p className="ms-2 mt-2   text-black font-sans font-bold text-sm" style={{color : "#2A3335"}}> {pokemonData?.description} </p>
            </div>
        </div>
    )
}