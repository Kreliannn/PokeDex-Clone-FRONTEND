'use client'

import { useEffect, useState } from 'react'

export default function LoadingPage() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-red-600 flex flex-col items-center justify-center p-4">
      <div className="w-32 h-32 relative mb-8">
        <div className="pokeball"></div>
      </div>
      <h1 className="text-2xl font-bold text-white mb-4">Loading Pokédex{dots}</h1>
    </div>
  )
}
