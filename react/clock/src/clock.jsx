import React, {useState,useEffect} from "react";

function Clock({title}){
    const [date,setDate]=useState(new Date());
    const [isRunning,setIsRunning]=useState(true);

    useEffect(()=>{
        let timerID;

        if (isRunning){
            timerID = setInterval(()=>{
                setDate(new Date());
            },1000)
        }

        return ()=>{
            clearInterval(timerID);
        };
    },[isRunning]);
    
    
    const handleToggle=()=>{setIsRunning(!isRunning)};


    return (
        <div style={{border:"1px solid grey",padding:"20px",margin:"20px"}}>
            <h2>{title}</h2>
            <h3>当前时间：{date.toLocaleTimeString()}</h3>
            <button onClick={handleToggle}>{isRunning?"停止":"开始"}</button>
        </div>
    )
};

export default Clock;