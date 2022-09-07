import React, { useState } from 'react';

const BoxGenerator = (props) => {

    // let boxes = ["blue", "blue", "blue"];
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([])

    const createBox = (e) => {
        e.preventDefault();
        //console.log(color);
        //boxes.push(color);
        updateDisplay(color);
        //console.log(boxes);
        console.log("Box created")
    }

    const updateDisplay = (color) => {
        setBoxes([...boxes, color])
    }

    return (
        <div>
            <form onSubmit={createBox}>
                <label>Box Color:</label>
                <input type="text" onChange={(e) => setColor(e.target.value)} />
                <input type="submit" value="Create Box" />
            </form>
            <div>
                <ul>
                    {boxes.map((item, i) =>
                        <div style={{ backgroundColor: item}} key={i} > {item} </div>)}
                </ul>
            </div>
        </div>
    )
};

export default BoxGenerator;