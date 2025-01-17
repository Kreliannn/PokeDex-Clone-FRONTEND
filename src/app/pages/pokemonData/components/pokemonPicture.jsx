import usePokemonDataStore from "@/app/store/pokemonDataStore"
import useCaptureImageStore from "@/app/store/captureImageStore"

export default function PokemonPicture()
{
    let pokemonData = usePokemonDataStore((state) => state.pokemonData)
    let captureImg = useCaptureImageStore((state) => state.img)

    return(
       
        <div className="flex h-52 gap-2 m-2 mt-2">
            <div className="w-[30%] bg-gray-600 border border-black shadow-lg grid grid-cols-1 ">
                <div className=' bg-red-500 m-2 border border-black  shadow bg-cover bg-center bg-no-repeat h-20'>
                    <img src={captureImg} alt="" style={{width : "100%", height : "100%"}} />
                </div>

                <div className='border border-black shadow  m-2 bg-cover bg-center bg-no-repeat h-20' style={{backgroundImage : "url('/pokemonbg2.jpg"}}>
                    <img src={pokemonData?.sprite} alt="" style={{width : "100%", height : "100%"}}  />
                </div>
            </div>
            
            <div className="w-[70%] bg-cover bg-center bg-no-repeat m-1 border border-black shadow-lg" style={{backgroundImage : "url('/pokemonbg1.jpg')"}}>
                    <img src={pokemonData?.picture} alt="" style={{width : "100%", height : "100%"}} />
            </div>
        </div>
  
    )
}