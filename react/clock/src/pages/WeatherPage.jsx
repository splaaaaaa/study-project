import React from "react";
import { Link } from "react-router-dom";
import Weather from "../Weather";

function WeatherPage() {
    return (
        <div style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <button className="btn btn-back">
                        ← 返回首页
                    </button>
                </Link>
            </div>
            <h1 className="page-title">🌤️ 天气页面</h1>
            <Weather title="实时天气信息" />
        </div>
    );
}

export default WeatherPage; 