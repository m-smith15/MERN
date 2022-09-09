import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router';


const Results = () => {
    
    const { type } = useParams();
    const { id } = useParams();
    
    const [name, setName] = useState("");
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [hairColor, setHairColor] = useState("");
    const [skinColor, setSkinColor] = useState("");
    const [climate, setClimate] = useState("");
    const [population, setPopulation] = useState("");
    const [diameter, setDiameter] = useState("");

    useEffect(() => {
        fetch(`https://swapi.dev/api/${type}/${id}`)
            .then(response => response.json())
            .then(response => {
                setName(response.name)
                setMass(response.mass)
                setHeight(response.height)
                setHairColor(response.hair_color)
                setSkinColor(response.skin_color)
                setClimate(response.climate)
                setPopulation(response.population)
                setDiameter(response.diameter)
            })
    }, []);
    return (
        <div>
            <div>
                {name ? <div>Name: { name }</div> : null}
                {height ? <div>height: {height} </div> : null}
                {mass ? <div>Mass: { mass }</div> : null}
                {hairColor ? <div>Hair color: { hairColor }</div> : null}
                {skinColor ? <div>Skin color: { skinColor }</div> : null}
                {climate ? <div>climate: { climate }</div> : null}
                {population ? <div>population: { population }</div> : null}
                {diameter ? <div>diameter: { diameter }</div> : null}
            </div>
        </div>
    );
}
export default Results