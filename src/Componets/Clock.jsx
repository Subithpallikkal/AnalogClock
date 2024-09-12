import React,{Component, useEffect, useState} from "react";
import  './index.css'

function Clock(){
    const [time,setTime] = useState(new Date())

    useEffect((props)=>{
        const timeId = setInterval(()=>{
            setTime(new Date())
        },1000)
    },[])

        const hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return(
            <>
            <div className="clock">
                <div className="hour_hand" style={{transform:`rotateZ(${hour *30 + minutes * 0.5}deg)`}}></div>
                <div className="min_hand" style={{transform:`rotateZ(${minutes * 6}deg)`}}></div>
                <div className="sec_hand" style={{transform:`rotateZ(${seconds *6}deg)`}}></div>
                <span className="twelve">12</span>
                <span className="one">1</span>
                <span className="two">2</span>
                <span className="three">3</span>
                <span className="four">4</span>
                <span className="five">5</span>
                <span className="six">6</span>
                <span className="seven">7</span>
                <span className="six">6</span>
                <span className="seven">7</span>
                <span className="eight">8</span>
                <span className="nine">9</span>
                <span className="ten">10</span>
                <span className="eleven">11</span>
            </div>
            </>
        )
    }

export default Clock