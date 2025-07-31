import React, { useState, useEffect } from "react";

function Timer({ title }) {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerID;

        if (isRunning) {
            timerID = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timerID);
        };
    }, [isRunning]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className="card">
            <h2 className="section-title">{title}</h2>
            <div className="time-display">
                {formatTime(time)}
            </div>
            <div style={{ textAlign: "center" }}>
                {!isRunning ? (
                    <button className="btn btn-success" onClick={handleStart}>
                        ▶️ 开始
                    </button>
                ) : (
                    <button className="btn btn-secondary" onClick={handlePause}>
                        ⏸️ 暂停
                    </button>
                )}
                <button className="btn btn-primary" onClick={handleReset}>
                    🔄 重置
                </button>
            </div>
        </div>
    );
}

export default Timer; 