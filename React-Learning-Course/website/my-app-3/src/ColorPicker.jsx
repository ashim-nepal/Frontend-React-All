import React, {useState} from "react";

function ColorPicker(){

    const [color, setColor] = useState("#000000")

    function handleColorChange(e){
        setColor(e.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker App</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>

            </div>
            <label>Select Color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>

        </div>
    );


}

export default ColorPicker;