import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);

    const updateName = ()=>{
        setName("Patrik");
    }

    const updateAge = ()=>{
        setAge(age + 1);
    }

    const updateIsEmployee = ()=>{
        setIsEmployee(!isEmployee);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Employee?: {isEmployee ? "Yes" : "No"}</p>
            <button onClick={updateIsEmployee}>Set Employee Status</button>
        </div>

    );

}

export default MyComponent;