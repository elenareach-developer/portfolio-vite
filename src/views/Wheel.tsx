import React,{useState,useEffect} from 'react';
import WheelComponent from "../components/WheelComponent"

import {segColorsWheel,segmentsWheel} from "../services/constants"


const Wheel = () =>{
    const [winner,setWinner] = useState(segmentsWheel[3]);
    const [segments, setSegments] = useState(segmentsWheel)
    const [segmentColors, setSegmentColors] = useState(segColorsWheel)
    const onFinished = (winner:string)=> {
        setWinner(winner)
        console.log(winner)
      }

  

  return (
    <>
    <WheelComponent
        segments={segments}
        segColors={segColorsWheel}
        winningSegment={segmentsWheel[3]}
        onFinished={(winner)=>onFinished(winner)}
        primaryColor='black'
        contrastColor='white'
        buttonText='Spin'
        isOnlyOnce={false}
        size={290}
        upDuration={100}
        downDuration={1000}
      />
    </>
  )
}


export default Wheel
