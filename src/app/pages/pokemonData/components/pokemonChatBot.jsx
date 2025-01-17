import usePokemonDataStore from "@/app/store/pokemonDataStore"


export default function PokemonChatBot()
{
    let pokemonData = usePokemonDataStore((state) => state.pokemonData)
    

    return(
    <div className='container  border h-52 bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-lg w-96 m-auto rounded'>
        <div className="container  bg-white h-32 m-auto mt-2" style={{width : "95%", backgroundColor : "whitesmoke"}}>
                <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perspiciatis!</p>
        </div>

        <div className="container bg-gray-600 rounded h-14 m-auto mt-2 flex items-center justify-between px-4" style={{width: "95%"}}>
            <input 
                type="text" 
                placeholder="Search..." 
                className="flex-grow mr-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button 
                className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700  text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
                Search
            </button>
        </div>
    </div>
    )
}