

export default  function Type({ type })
{
    let color;

    switch(type)
    {
        case "fire":
            color = "bg-red-500"
        break;

        case "flying":
           color = "bg-blue-700"
        break;

        case "water":
            color = "bg-blue-500"
        break;

        case "bug":
            color = "bg-green-400"
        break;

        case "electric":
           color = "bg-yellow-500"
        break;

        case "grass":
            color = "bg-green-500"
        break;

        case "normal":
            color = "bg-gray-400"
        break;

        case "rock":
           color = "bg-yellow-900"
        break;

        case "dark":
            color = "bg-gray-700"
        break;

        case "fairy":
            color = "bg-pink-300"
        break;

        case "ground":
           color = "bg-yellow-700"
        break;

        case "poison":
            color = "bg-purple-500"
        break;

        case "steel":
            color = "bg-gray-500"
        break;

        case "dragon":
            color = "bg-purple-800"
        break;

        case "fighting":
           color = "bg-red-900"
        break;

        case "ghost":
            color = "bg-purple-900"
        break;

        case "ice":
            color = "bg-blue-300"
        break;

        case "psychic":
            color = "bg-pink-800"
        break;

       default :
            color = "bg-white"
       break;
    }


    return <span  className={`rounded-full shadow-lg text-white ring-2 ring-black m-1 mt-2 mb-2 px-2 text-sm ${color}`}> {type} </span>

}