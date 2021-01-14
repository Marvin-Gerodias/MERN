import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Main from './Main';

export default function Planets(props) {
    const [result, setResult] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}/`)
        .then((response) => {
            setResult(response.data);
            console.log(result);
        }) 
    }, [props])

    return (
        <div>
            <Main />
            <h2>{result.name}</h2>
            <h3>Climate: {result.climate}</h3>
            <h3>Terrain: {result.terrain}</h3>
            <h3>Surface Water: {result.surface_water}</h3>
            <h3>Population: {result.population}</h3>
        </div>
    )
}