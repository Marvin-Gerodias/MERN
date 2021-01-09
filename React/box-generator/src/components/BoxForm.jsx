import React, {useState} from 'react';

// const myCallback = (myParam) => console.log(myParam);

const BoxForm = (props) => {
    const [input, setInput] = useState("");
    const [box, setBox] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        const {value} = e.target;
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <label>Color: </label>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
            {/* <h3>Input: {input}</h3>
            <ul>
                {box.map((b, idx) => <li key={idx} >{b}</li>)}
            </ul> */}
        </>
    )
}

export default BoxForm;