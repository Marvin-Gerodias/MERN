import { useState } from 'react';


function Form() {
    const [result, setResult] = useState(null);

    

    function handleClick(){
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118') //API request
            .then(response => response.json()) //returns another promise
            .then(response => setResult(response.results))


    }
    return (
        <div>
            <h2>Pokemon API using Fetch</h2>
            <button onClick={handleClick}>Fetch Pokemons</button>
            {result !== null ? (
                <ul className="list">
                    {result.map((pokemon, idx) => <li style={{'listStyle': 'none'}} key={idx}>{pokemon.name}</li>)}
                </ul>
            ) : null}
        </div>
    );
}

export default Form;