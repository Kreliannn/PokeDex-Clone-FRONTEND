"use client"
import { useRouter } from 'next/navigation';

export default function ExitButton()
{
    let router = useRouter()

    return(
        <div className='container  border h-14 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded  mt-2 w-96 m-auto mb-3 flex justify-center place-items-center' onClick={()=>{router.push("/pages/pokedex")}}>
                <h1 className="text-center text-white text-3xl "> Back </h1>
        </div>
    )
}