import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <header className="header"></header>
      <article className="container">
        <section className="side" id="side">
          <section className="me">
            <section className="portrait">
              {isLoading ? (
                <div className="loading">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              ) : (
                <img 
                  className="avatar" 
                  src="./spl.jpg" 
                  alt="头像" 
                  onError={(e) => {
                    console.error('头像加载失败:', e);
                    e.target.style.display = 'none';
                    // 如果头像加载失败，显示一个占位符
                    const placeholder = document.createElement('div');
                    placeholder.className = 'avatar-placeholder';
                    placeholder.textContent = '佘培琳';
                    e.target.parentNode.appendChild(placeholder);
                  }}
                />
              )}
            </section>
            <h1 className="name">佘培琳</h1>
            <h4 className="info-job">学习方向：前端开发</h4>
          </section>

          <section className="profile info-unit">
            <h2><i className="fa fa-user" aria-hidden="true"></i>基本信息</h2>
            <hr/>
            <ul>
              <li><label>个人信息</label><span>佘培琳/ 女 / 19岁</span></li>
              <li><label>英语水平</label><span>CET-4</span></li>
            </ul>
          </section>

          <section className="contact info-unit">
            <h2><i className="fa fa-phone" aria-hidden="true"></i>联系方式</h2>
            <hr/>
            <ul>
              <li><label>手机</label><span>13421058763</span></li>
              <li><label>邮箱</label><span>spl0203@163.com</span></li>
              <li><label>博客</label><span>在计划当中</span></li>
            </ul>
          </section>

          <section className="skill info-unit">
            <h2><i className="fa fa-code" aria-hidden="true"></i>技能点</h2>
            <hr/>
            <ul>
              <li><label>HTML</label><progress value="80" max="100"></progress></li>
              <li><label>CSS</label><progress value="80" max="100"></progress></li>
              <li><label>JavaScript</label><progress value="60" max="100"></progress></li>
              <li><label>React</label><progress value="60" max="100"></progress></li>
              <li><label>git</label><progress value="80" max="100"></progress></li>
            </ul>
          </section>
        </section>

        <section className="main">
          <section className="edu info-unit">
            <h2><i className="fa fa-graduation-cap" aria-hidden="true"></i>教育经历</h2>
            <hr/>
            <ul>
              <li>
                <h3><span>深圳职业技术大学 - 大数据工程技术专业（本科大一）</span><time>2024.9-现在</time></h3>
                <p>第一学期专业排名<mark>3/35</mark>，第二学期专业排名<mark>1/35</mark>，在此期间，学习专业课：python、Linux操作系统、数据库原理；自学了html5、css</p>
              </li>
            </ul>
          </section>

          <section className="project info-unit">
            <h2><i className="fa fa-terminal" aria-hidden="true"></i>学习实践</h2>
            <hr/>
            <ul>
              <li>
                <h3><span>[展示1]简单任务管理系统</span><time>2025.7</time></h3>
                <ul className="info-content">
                  <li>技术栈：React+Vite+Tailwind CSS+React Router+LocalStorage</li>
                  <li>
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>[效果]具备任务增删改查、数据可视化统计、状态存储及动态路由等功能的简单任务管理系统<br/>
                    <i className="fa fa-users" aria-hidden="true"></i>[功能]前端页面组件化构建，使用React Hooks管理状态；使用localstorage实现持久化存储，并预留API接口；集成统计图表进行数据可视化；实现懒加载与动态路由。<br/>
                    <i className="fa fa-bars" aria-hidden="true"></i>[过程]使用Vite实现极速开发体验；使用Tailwind CSS进行组件化开发；使用React Router实现管理单页应用路由；使用LocalStorage实现状态存储，过程中遇到困难，有运用大模型解决一些问题。<br/>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>[收获]进一步了解React开发流程，对前端技术有更深入的理解。
                  </li>
                </ul>
              </li>
              <li>
                <h3><span>[展示2]To-do-list</span><time>2025.7</time></h3>
                <ul className="info-content">
                  <li>技术栈：react+vite+js+Tailwind CSS</li>
                  <li>
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>[效果]实现能增删查改的简单待办事项应用。<br/>
                    <i className="fa fa-bars" aria-hidden="true"></i>[功能]添加删除任务，任务状态切换，查找任务，添加天气组件，实现数据可视化。<br/>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>[收获]这是接触react的第二个小项目，帮助我了解vite快速搭建项目框架，在修改该项目过程中对js有了更加深入的理解，为后续熟练使用打好基础。
                  </li>
                </ul>
              </li>
              <li>
                <h3><span>[展示3]一个可以暂停的时钟</span><time>2025.7</time></h3>
                <ul className="info-content">
                  <li>技术栈：react+vite+js+Tailwind CSS+React Router Dom</li>
                  <li>
                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>[实现]能查看时间、暂停时间后继续计时的时钟<br/>
                    <i className="fa fa-users" aria-hidden="true"></i>[功能]查看时间，暂停后能与电脑同步时间；能实现正向计时；可查看天气。<br/>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>[收获]初步了解react框架，进一步了解js语法知识。
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="work info-unit">
            <h2><i className="fa fa-pencil" aria-hidden="true"></i>自我评价/期望</h2>
            <hr/>
            <p>我为人友善真诚，做事细致专注，具备极强的责任心与执行力。学习能力与适应能力较强，不仅能较短时间掌握新知识和技能，更能主动探索未知领域。喜欢思考，这使我能够高效解决复杂挑战。同时，我乐于沟通协作，积极听取他人意见，取长补短，优化自身。对于认定的目标和机会，我愿意并能够投入大量时间和精力。虽然当前编程经验尚在积累中，前端开发的知识实践还有不足之处，但我坚信凭借强大的学习驱动力和主观能动性，我将借助大模型的力量，不断提升自身能力，实现自我完善，胜任项目要求。</p>
          </section>
        </section>
      </article>

      <footer className="footer">
        <p>© 24大数据本佘培琳大一阶段简历.</p>
      </footer>

      <aside>
        <ul>
          <li><a href="https://github.com/splaaaaaa/studying-notes.git" target="_blank">学习笔记</a></li>
          <li><a href="https://github.com/splaaaaaa/study-project.git" target="_blank">任务仓库</a></li>
          <li><a href="#" target="_blank">博客</a></li>
        </ul>
      </aside>
    </div>
  )
}

export default App
