import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const inc= ()=> setCount(count+1);

    const dec = ()=> setCount(count-1);

    const reset = ()=> setCount(0);

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={dec}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={inc}>Increment</button>
        </div>


    );


}

export default Counter;