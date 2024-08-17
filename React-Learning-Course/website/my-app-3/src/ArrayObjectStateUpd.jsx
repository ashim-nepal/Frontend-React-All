import React, {useState} from "react";

function ArrayObjectStateUpd(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(cars =>[...cars, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index){
        setCars(c => c.filter((_, i) => i !== index));

    }

    function handleYearChange(e){
        setCarYear(e.target.value);

    }

    function handleMakeChange(e){
        setCarMake(e.target.value);

    }

    function handleModelChange(e){
        setCarModel(e.target.value);

    }

    return(
        <div>
            <h2>List of Car Object</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} - {car.model} by {car.make}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Make"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Model"/><br/>
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    );

}

export default ArrayObjectStateUpd;