import React from "react";
import { Link } from "react-router-dom";
import Timer from "../Timer";

function TimerPage() {
    return (
        <div style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <button className="btn btn-back">
                        ← 返回首页
                    </button>
                </Link>
            </div>
            <h1 className="page-title">⏱️ 计时器页面</h1>
            <Timer title="正向计时器" />
        </div>
    );
}

export default TimerPage; 