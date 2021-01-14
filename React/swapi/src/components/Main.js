import React, { useState } from 'react'
import { navigate } from '@reach/router'



export default function Main() {
    const [input, setInput] = useState("people");
    const [id, setId] = useState(1);

    const handleSubmit = (e) => {
        navigate(`/${input}/${id}`);
    }

    return (
        <>
            <form onSubmit = {handleSubmit} style = {{display: "flex", justifyContent: "center"}}>
                <div style = {{margin: "0 10px 0 0"}}>
                    <label className="Label">Search for: </label>
                    <select value = {input} onChange = {(e) => setInput(e.target.value)}>
                        <option value = "people">People</option>
                        <option value = "planets">Planets</option>
                    </select>
                </div>
                <div style = {{margin: "0 20px 0 0"}}>
                    <label className="Label">ID: </label>
                        <input type = "number" value = {id} onChange = {(e) => setId(e.target.value)} />
                </div>
                <div>
                    <button>Search</button>
                </div>
            </form>
        </>
    )
}


