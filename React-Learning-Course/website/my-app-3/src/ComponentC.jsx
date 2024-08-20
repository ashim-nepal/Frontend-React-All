import React, {useContext} from "react";
import ComponentD from "./ComponentD";
import { userContext } from "./ComponentA";

function ComponentC(){
    const user = useContext(userContext);

    return(
        <div className="box">
            Component C
            <h2>Hola ${user}!</h2>
            <ComponentD/>
        </div>
    );


}

export default ComponentC;