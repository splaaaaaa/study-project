// 和风天气API配置
export const WEATHER_CONFIG = {
    // 请在这里替换为你的和风天气API密钥
    // 注册地址：https://dev.qweather.com/
    API_KEY: "8965dd03799b49d5b9749682866a153a",
    API_URL: "https://devapi.qweather.com/v7/weather/now",
    
    // 支持的城市列表
    CITIES: [
        { name: "北京", code: "101010100" },
        { name: "上海", code: "101020100" },
        { name: "广州", code: "101280101" },
        { name: "深圳", code: "101280601" },
        { name: "杭州", code: "101210101" },
        { name: "南京", code: "101190101" },
        { name: "武汉", code: "101200101" },
        { name: "成都", code: "101270101" },
        { name: "西安", code: "101110101" },
        { name: "重庆", code: "101040100" }
    ]
};

// 使用说明：
// 1. 访问 https://dev.qweather.com/ 注册账号
// 2. 创建应用获取API密钥
// 3. 将API密钥替换上面的 "YOUR_API_KEY_HERE"
// 4. 取消注释 Weather.jsx 中的真实API调用代码 