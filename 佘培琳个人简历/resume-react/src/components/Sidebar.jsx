import React from 'react'
import { FaUser, FaPhone, FaCode } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ isLoading }) => {
  const skills = [
    { name: 'HTML', value: 80 },
    { name: 'CSS', value: 80 },
    { name: 'JavaScript', value: 60 },
    { name: 'React', value: 60 },
    { name: 'git', value: 80 }
  ]

  return (
    <section className="side" id="side">
      {/* 个人肖像 */}
      <section className="me">
        <section className="portrait">
          {isLoading ? (
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className="avatar-placeholder">
              <FaUser size={48} />
            </div>
          )}
        </section>

        <h1 className="name">佘培琳</h1>
        <h4 className="info-job">学习方向：前端开发</h4>
      </section>

      {/* 基本信息 */}
      <section className="profile info-unit">
        <h2>
          <FaUser /> 基本信息
        </h2>
        <hr/>
        <ul>
          <li>
            <label>个人信息</label>
            <span>佘培琳/ 女 / 19岁</span>
          </li>
          <li>
            <label>英语水平</label>
            <span>CET-4</span>
          </li>
        </ul>
      </section>

      {/* 联系方式 */}
      <section className="contact info-unit">
        <h2>
          <FaPhone /> 联系方式
        </h2>
        <hr/>
        <ul>
          <li>
            <label>手机</label>
            <span>13421058763</span>
          </li>
          <li>
            <label>邮箱</label>
            <span>spl0203@163.com</span>
          </li>
          <li>
            <label>博客</label>
            <span>在计划当中</span>
          </li>
        </ul>
      </section>

      {/* 技能点 */}
      <section className="skill info-unit">
        <h2>
          <FaCode /> 技能点
        </h2>
        <hr/>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              <label>{skill.name}</label>
              <progress value={skill.value} max="100"></progress>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Sidebar
