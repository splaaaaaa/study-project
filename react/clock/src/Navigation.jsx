import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const location = useLocation();

    return (
        <nav className="nav-container">
            <ul className="nav-list">
                <li>
                    <Link 
                        to="/" 
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        🏠 首页
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/clock" 
                        className={`nav-link ${location.pathname === '/clock' ? 'active' : ''}`}
                    >
                        🕒 时钟
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/timer" 
                        className={`nav-link ${location.pathname === '/timer' ? 'active' : ''}`}
                    >
                        ⏱️ 计时器
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation; 