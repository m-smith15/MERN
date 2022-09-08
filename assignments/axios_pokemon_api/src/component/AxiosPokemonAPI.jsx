import Reach, { useEffect, useState } from 'react'
import axios from 'axios';
import { useInsertionEffect } from 'react';

const AxiosPokemonAPI = () => {

    const [pokemon, setPokemon] = useState([]);
    const [button, setButton] = useState(false)

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response=>{setPokemon({ name: response.data.results})})
    }

    return (
        <div>
            <h3>Click this button</h3>
        <button onClick = { getPokemon }>Catch em all</button>
        <ul>
        {pokemon.name ? pokemon.name.map((item, index) =>
            {return(<div key={index} > {item.name} </div>)
        }):null}
        </ul>

        </div>
    )

}

export default AxiosPokemonAPI;