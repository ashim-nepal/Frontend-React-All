import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const userContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("Ashy");

    return(
        <div className="box">
            Component A
            <h2>{`Hello ${user}!`}</h2>
            <userContext.Provider value={user}>
            <ComponentB user={user}/>
            </userContext.Provider>
            
        </div>
    );


}

export default ComponentA;