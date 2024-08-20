import React, {useState, useEffect} from "react";


function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
                }, 1000);
        return () =>{
            clearInterval(intervalId);
        }

    }, []);

    function formatTime(){
        let hours = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();
        const meridian = hours >= 12 ? "pm" : "am";

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(mins)}:${addZero(secs)} ${meridian}`;
    }

    // adding 0 for single digit clock

    function addZero(number){
        return (number < 10 ? "0" : "")+number;

    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
                </div> 

        </div>
    );


}

export default DigitalClock;