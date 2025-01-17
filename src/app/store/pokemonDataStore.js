import { create } from "zustand";


let usePokemonDataStore = create((set) => ({
    pokemonData : {
        name : null,
        picture : null,
        sprite : null,
        height : 0,
        weight : 0,
        types : [],
        stats : [],
        description : null
    },
    setPokemonData : (data) => set({ pokemonData : data})
}))

export default usePokemonDataStore