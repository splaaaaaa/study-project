import React from "react";
import { Link } from "react-router-dom";
import Clock from "../clock";

function ClockPage() {
    return (
        <div style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <button className="btn btn-back">
                        ← 返回首页
                    </button>
                </Link>
            </div>
            <h1 className="page-title">🕒 时钟页面</h1>
            <Clock title="这是一个可以暂停的时钟" />
        </div>
    );
}

export default ClockPage; 