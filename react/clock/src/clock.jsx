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
        <div className="card">
            <h2 className="section-title">{title}</h2>
            <div className="time-display">
                {date.toLocaleTimeString()}
            </div>
            <div style={{ textAlign: "center" }}>
                <button 
                    className={`btn ${isRunning ? 'btn-secondary' : 'btn-success'}`}
                    onClick={handleToggle}
                >
                    {isRunning ? "⏸️ 暂停" : "▶️ 开始"}
                </button>
            </div>
        </div>
    )
};

export default Clock;