import React, {useState} from 'react';

const Pokemon_API = () => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            // .then(response => console.log(response.results))
            .then(response => setPokemon({
                name: response.results}))
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
export default Pokemon_API;