import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ padding: "40px 20px" }}>
            <h1 className="page-title">🕒 计时器练习</h1>
            <p style={{ 
                fontSize: "18px", 
                color: "rgba(255, 255, 255, 0.95)", 
                marginBottom: "40px",
                textAlign: "center",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)"
            }}>
                欢迎使用计时器应用！点击下方卡片选择您想要使用的功能。
            </p>
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                gap: "30px",
                flexWrap: "wrap",
                maxWidth: "800px",
                margin: "0 auto",
                alignItems: "stretch"
            }}>
                <Link to="/clock" style={{ textDecoration: "none", flex: "1", minWidth: "300px" }}>
                    <div className="feature-card">
                        <div className="feature-icon">🕒</div>
                        <h3 style={{ marginBottom: "15px", color: "#1a1a1a" }}>时钟</h3>
                        <p style={{ color: "#2d2d2d", lineHeight: "1.6" }}>
                            显示当前时间，可以暂停和继续。实时更新，界面美观。
                        </p>
                    </div>
                </Link>
                <Link to="/timer" style={{ textDecoration: "none", flex: "1", minWidth: "300px" }}>
                    <div className="feature-card">
                        <div className="feature-icon">⏱️</div>
                        <h3 style={{ marginBottom: "15px", color: "#1a1a1a" }}>计时器</h3>
                        <p style={{ color: "#2d2d2d", lineHeight: "1.6" }}>
                            正向计时功能，支持开始、暂停、重置。精确计时，操作简单。
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Home; 