

function Button(){
    let count = 0;
    const handleClick = (e) =>{
        e.target.textContent = "Ouch!";
    }

    // const handleClick2 = (name)=> console.log(`${name} Stop Clicking`);

    return(
        <>
        <button onClick={(e) => handleClick(e)}>Click Me</button>
        {/* <button onClick={() => handleClick2("Dude")}>Click Me😎</button> */}
        </>
    );


}

export default Button;