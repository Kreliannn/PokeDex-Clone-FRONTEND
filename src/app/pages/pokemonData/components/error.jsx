'use client'

import { useRouter } from 'next/navigation'

export default function ErrorPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-red-600 flex flex-col items-center justify-center p-4">
      <div className="w-32 h-32 relative mb-8">
        <div className="pokeball pokeball-error"></div>
      </div>
      <h1 className="text-2xl font-bold text-white mb-4">Not a Pokémon!</h1>
      <p className="text-yellow-300 text-center mb-8">Oops! This creature doesn't exist in the Pokédex.</p>
      <button 
        onClick={() => router.back()} 
        className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
      >
        Back
      </button>
    </div>
  )
}