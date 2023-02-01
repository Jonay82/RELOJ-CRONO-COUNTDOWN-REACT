import React from "react";
import { useState} from "react";
import {useEffect} from "react";

const Countdown = () => {
    const [time, setTime] = useState("");
    useEffect(() =>{
        let countDownDate= new Date("Jan 1, 2024 00:00:00  ").getTime();
            let x = setInterval(()=>{

                    let now = new Date().getTime();
                    let distance = countDownDate - now ;
                    
                    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    setTime(  days  +"d " +    hours +  "h "   + minutes + "m " +seconds + "s " );

                    if (distance < 0) {
                        clearInterval(x);
                        setTime("SE ACABO EL TIME");
                    }

            }, 1000);
    }, []);

    return(  
        <div class="container-back-count">
            <div class="countdown">
            <h2>{time}</h2>
            
            </div>
        </div> 
    );
};

export default Countdown;