import React, {useState} from "react";

function ArrayStateUpd(){

    const [fruit, setFruits] = useState(["Apple", "Banana", "Cherry"]);

    function handleAddFruit(){
        const newFruit = document.getElementById("fruitInput").value;
        document.getElementById("fruitInput").value = "";

        setFruits(f => [...fruit ,newFruit]);
        
    }

    function handleRemoveFruit(index){
        setFruits(fruit.filter((_, i) => i !== index))


    }

    return(
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {fruit.map((fruit, index) => 
                <li key={index} onClick={()=> handleRemoveFruit(index)}>{fruit}</li>)}

            </ul>

            <input type="text" id="fruitInput" placeholder="Enter Fruit Name"/>
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
    );

}

export default ArrayStateUpd;