import React, { useContext } from "react";

import { userContext } from "./ComponentA";


function ComponentD(){
    const user = useContext(userContext);

    return(
        <div className="box">
            Component D
            <h2>{`By ${user}`}</h2>
        </div>
    );


}

export default ComponentD;