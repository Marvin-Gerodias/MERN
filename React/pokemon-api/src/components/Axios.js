import { useEffect, useState } from 'react';
import axios from 'axios';

function Form() {
    const [result, setResult] = useState(null);

    

    function handleClick(){
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118') //automatically converts to JSON
            .then(response => setResult(response.data.results))

    }
    return (
        <div>
            <h2>Pokemon API using Axios</h2>
            <button onClick={handleClick}>Fetch Pokemons</button>
            {result !== null ? (
                <ul className="list">
                    {result.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)}
                </ul>
            ) : null}
        </div>
    );
}

export default Form;