import React, { useState } from 'react'

export default function Form({createTask}) {
    const [input, setInput] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        createTask({
            'body': input,
            'completed': false
        });

        setInput("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <input type="submit" value="Create a new task!" />
            </form>
        </div>
    )
}
