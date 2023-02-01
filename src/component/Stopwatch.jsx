import React from "react";
import { useState} from "react";
import { useEffect } from "react";

const Stopwatch = () =>{
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    useEffect(() => {
            let interval = null;
        
            if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
            } else {
            clearInterval(interval);
            }
            return () => clearInterval(interval);
        }, [timerOn]);


                    
    return (
        <div class="container-back-stop">
            <div class="stopwatch">
                    <div class="box-t">
                        <h2 class="t">{time}</h2>
                    </div>
                    <div class="container-box">
                        <div class="box">
                                <span class="counter">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                                <span class="counter">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                                <span class="counter">{("0" + ((time / 10) % 100)).slice(-2)}</span>
                        </div>    

                        <div class="box-btn">
                            {!timerOn && time === 0 && (
                                    <button class="btn-Stop"onClick={() => setTimerOn(true)}>START</button>
                            )}

                            {timerOn && 
                                    <button class="btn-Stop"onClick={() => setTimerOn(false)}>STOP</button>
                                }

                            {!timerOn && time > 0 && (
                                <button class="btn-Stop"onClick={() => setTimerOn(true)}>RESUME</button>               
                                )}        

                            {!timerOn && time > 0 && (
                                    <button class="btn-Stop"onClick={() => setTime(0)}>RESET</button>
                                )}
                        </div>
                    </div>    
            </div>
        </div>    
    )
}

export default Stopwatch;