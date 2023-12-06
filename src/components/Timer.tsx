import React, {useState, useEffect} from 'react';
import {TimerProps} from "../config/projects"

const Timer = ({timer = 10}:TimerProps)=>{
    const [showTimer, setShowTimer] = useState(timer);
    const [timerFull, setTimerFull] = useState('12:00'.split(':'))
    
    useEffect(()=>{
            if(showTimer > 10){
                setInterval(()=>{
                    setShowTimer(showTimer+1)
                },1000)
            }else{
                let newTimer :string[]= [String(Number(timerFull[1])-1),'00']
                setTimerFull(newTimer)
            }
    })
    return(
        <>
           {timerFull[1]} : {showTimer}
        </>
    )


}
export default Timer