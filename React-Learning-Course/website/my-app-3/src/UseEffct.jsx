import React, {useState, useEffect, useImperativeHandle} from "react";

function UseEffct(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() =>{
        document.title = `Count ${count} - ${color}`;

    }, [count, color]);
    
    function addCount(){
        setCount(c => c + 1)
    }
    function decreaseCount(){
        setCount(c => c - 1)
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("Added Event listner");

        return() =>{
            window.removeEventListener("resize", handleResize);
            console.log("Removed Event listner");
        }
    }, []);

    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <div>
            <h4>Window Width: {width}px</h4>
            <h4>Window Height: {height}px</h4>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={decreaseCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );


}

export default UseEffct;