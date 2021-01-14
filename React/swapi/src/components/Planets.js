import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Main from './Main';

export default function Planets(props) {
    const [result, setResult] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}/`)
        .then(response => {setResult(response.data)})
        .catch((e) => {setError("These aren't the droids you're looking for.")})
    }, [props])

    const Display = () => {
        return (
            <div>
            <h2>{result.name}</h2>
            <h3>Climate: {result.climate}</h3>
            <h3>Terrain: {result.terrain}</h3>
            <h3>Surface Water: {result.surface_water}</h3>
            <h3>Population: {result.population}</h3>
        </div>
        )
    }

    const Error = () => {
        return (
            <>
                <h3>{error}</h3>
                <img src = "https://i.kym-cdn.com/entries/icons/mobile/000/018/682/obi-wan.jpg" />
            </>
        )
    }

    return (
        <div>
            <Main />
            {error != null ? Error() : Display()}
        </div>
    )
}