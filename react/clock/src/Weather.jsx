import React, { useState, useEffect } from "react";
import { WEATHER_CONFIG } from "./config";

function Weather({ title }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("北京");
    const [debugInfo, setDebugInfo] = useState("");

    useEffect(() => {
        fetchWeather();
    }, [city]);

    const fetchWeather = async () => {
        try {
            setLoading(true);
            setError(null);
            setDebugInfo("");
            
            // 由于CORS限制，我们使用模拟数据
            // 在实际项目中，建议使用后端代理或服务器端调用
            const mockData = {
                code: "200",
                now: {
                    temp: getRandomTemp(),
                    feelsLike: getRandomTemp(),
                    humidity: getRandomHumidity(),
                    text: getRandomWeather(),
                    windDir: getRandomWindDir(),
                    windScale: "3",
                    windSpeed: getRandomWindSpeed()
                },
                location: city
            };
            
            // 模拟网络延迟
            await new Promise(resolve => setTimeout(resolve, 1000));
            setWeather(mockData);
            setDebugInfo("使用模拟数据（CORS限制）");
            
        } catch (err) {
            console.error("Weather API Error:", err);
            setError(`获取天气信息失败: ${err.message}`);
            setDebugInfo(`错误详情: ${err.toString()}`);
        } finally {
            setLoading(false);
        }
    };

    // 生成随机温度
    const getRandomTemp = () => {
        return Math.floor(Math.random() * 30) + 5; // 5-35度
    };

    // 生成随机湿度
    const getRandomHumidity = () => {
        return Math.floor(Math.random() * 40) + 40; // 40-80%
    };

    // 生成随机天气
    const getRandomWeather = () => {
        const weathers = ["晴", "多云", "阴", "小雨", "中雨", "阵雨"];
        return weathers[Math.floor(Math.random() * weathers.length)];
    };

    // 生成随机风向
    const getRandomWindDir = () => {
        const directions = ["东北风", "东风", "东南风", "南风", "西南风", "西风", "西北风", "北风"];
        return directions[Math.floor(Math.random() * directions.length)];
    };

    // 生成随机风速
    const getRandomWindSpeed = () => {
        return Math.floor(Math.random() * 20) + 5; // 5-25 km/h
    };

    const getWeatherIcon = (text) => {
        const weatherIcons = {
            "晴": "☀️",
            "多云": "⛅",
            "阴": "☁️",
            "小雨": "🌧️",
            "中雨": "🌧️",
            "大雨": "⛈️",
            "雪": "❄️",
            "雾": "🌫️",
            "霾": "😷",
            "雷阵雨": "⛈️",
            "阵雨": "🌦️"
        };
        return weatherIcons[text] || "🌤️";
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleRefresh = () => {
        fetchWeather();
    };

    if (loading) {
        return (
            <div className="card">
                <h2 className="section-title">{title}</h2>
                <div style={{ textAlign: "center", padding: "20px" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "10px" }}>⏳</div>
                    <p>正在获取天气信息...</p>
                    {debugInfo && (
                        <div style={{ fontSize: "0.8rem", color: "#666", marginTop: "10px" }}>
                            {debugInfo}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="card">
                <h2 className="section-title">{title}</h2>
                <div style={{ textAlign: "center", padding: "20px" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "10px" }}>⚠️</div>
                    <p>{error}</p>
                    <div style={{ marginTop: "10px", fontSize: "0.9rem", color: "#666" }}>
                        <p>请检查：</p>
                        <ul style={{ textAlign: "left", display: "inline-block" }}>
                            <li>网络连接是否正常</li>
                            <li>API密钥是否正确</li>
                            <li>是否超出API调用限制</li>
                        </ul>
                    </div>
                    {debugInfo && (
                        <div style={{ 
                            marginTop: "10px", 
                            padding: "10px", 
                            background: "#f8f9fa", 
                            borderRadius: "5px",
                            fontSize: "0.8rem",
                            textAlign: "left",
                            maxHeight: "200px",
                            overflow: "auto"
                        }}>
                            <strong>调试信息:</strong><br/>
                            {debugInfo}
                        </div>
                    )}
                    <button className="btn btn-primary" onClick={handleRefresh}>
                        重试
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <h2 className="section-title">{title}</h2>
            
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
                <select 
                    value={city} 
                    onChange={handleCityChange}
                    style={{
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        fontSize: "14px",
                        marginRight: "10px"
                    }}
                >
                    {WEATHER_CONFIG.CITIES.map(cityOption => (
                        <option key={cityOption.code} value={cityOption.name}>
                            {cityOption.name}
                        </option>
                    ))}
                </select>
                <button className="btn btn-primary" onClick={handleRefresh}>
                    🔄 刷新
                </button>
            </div>

            {weather && (
                <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "4rem", marginBottom: "10px" }}>
                        {getWeatherIcon(weather.now.text)}
                    </div>
                    <h3 style={{ fontSize: "2rem", marginBottom: "10px", color: "#1a1a1a" }}>
                        {weather.now.temp}°C
                    </h3>
                    <p style={{ fontSize: "1.2rem", marginBottom: "15px", color: "#2d2d2d" }}>
                        {weather.now.text} | 体感温度 {weather.now.feelsLike}°C
                    </p>
                    
                    <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "repeat(2, 1fr)", 
                        gap: "15px",
                        marginTop: "20px"
                    }}>
                        <div style={{ 
                            background: "rgba(255, 255, 255, 0.8)", 
                            padding: "15px", 
                            borderRadius: "10px",
                            border: "1px solid rgba(0, 0, 0, 0.1)"
                        }}>
                            <div style={{ fontSize: "1.5rem", marginBottom: "5px" }}>💧</div>
                            <div style={{ fontSize: "0.9rem", color: "#666" }}>湿度</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{weather.now.humidity}%</div>
                        </div>
                        <div style={{ 
                            background: "rgba(255, 255, 255, 0.8)", 
                            padding: "15px", 
                            borderRadius: "10px",
                            border: "1px solid rgba(0, 0, 0, 0.1)"
                        }}>
                            <div style={{ fontSize: "1.5rem", marginBottom: "5px" }}>🌬️</div>
                            <div style={{ fontSize: "0.9rem", color: "#666" }}>风向</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{weather.now.windDir}</div>
                        </div>
                        <div style={{ 
                            background: "rgba(255, 255, 255, 0.8)", 
                            padding: "15px", 
                            borderRadius: "10px",
                            border: "1px solid rgba(0, 0, 0, 0.1)"
                        }}>
                            <div style={{ fontSize: "1.5rem", marginBottom: "5px" }}>💨</div>
                            <div style={{ fontSize: "0.9rem", color: "#666" }}>风速</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{weather.now.windSpeed}km/h</div>
                        </div>
                        <div style={{ 
                            background: "rgba(255, 255, 255, 0.8)", 
                            padding: "15px", 
                            borderRadius: "10px",
                            border: "1px solid rgba(0, 0, 0, 0.1)"
                        }}>
                            <div style={{ fontSize: "1.5rem", marginBottom: "5px" }}>🌡️</div>
                            <div style={{ fontSize: "0.9rem", color: "#666" }}>体感</div>
                            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{weather.now.feelsLike}°C</div>
                        </div>
                    </div>
                    
                    <div style={{ 
                        marginTop: "20px", 
                        padding: "15px", 
                        background: "rgba(255, 193, 7, 0.1)", 
                        borderRadius: "10px",
                        border: "1px solid rgba(255, 193, 7, 0.3)"
                    }}>
                        <p style={{ fontSize: "0.9rem", color: "#856404", margin: 0 }}>
                            💡 提示：当前使用模拟数据。由于CORS限制，前端无法直接调用和风天气API。
                            要获取真实天气数据，需要搭建后端代理服务器。
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;