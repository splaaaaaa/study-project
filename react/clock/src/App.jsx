import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

import Clock from './clock'

function App() {
  return (
    <div>
      <h1>🕒 计时器练习</h1>
      <Clock title="这是一个可以暂停的时钟" />
    </div>
  );
}

export default App;
