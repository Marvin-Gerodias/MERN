import React, {useState} from 'react';

// const myCallback = (myParam) => console.log(myParam);

const BoxForm = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, color]);
        setColor('');
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <label>Color: </label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                <input type="submit" value="Add"/>
            </form>

            <div>
                {boxes.map((color, index) => <div className = 'box' style = {{backgroundColor: color, margin: "10px", width: "100px", height: "100px"}} key = {index}/>)}
            </div>
        </>
    );
}



export default BoxForm;