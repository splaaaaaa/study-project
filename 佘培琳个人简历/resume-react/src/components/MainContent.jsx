import React from 'react'
import { FaGraduationCap, FaTerminal, FaPencil, FaPaperPlaneO, FaUsers, FaBars, FaThumbsOUp } from 'react-icons/fa'
import './MainContent.css'

const MainContent = () => {
  const projects = [
    {
      title: '[展示1]简单任务管理系统',
      time: '2025.7',
      tech: 'React+Vite+Tailwind CSS+React Router+LocalStorage',
      effects: '具备任务增删改查、数据可视化统计、状态存储及动态路由等功能的简单任务管理系统',
      functions: '前端页面组件化构建，使用React Hooks管理状态；使用localstorage实现持久化存储，并预留API接口；集成统计图表进行数据可视化；实现懒加载与动态路由。',
      process: '使用Vite实现极速开发体验；使用Tailwind CSS进行组件化开发；使用React Router实现管理单页应用路由；使用LocalStorage实现状态存储，过程中遇到困难，有运用大模型解决一些问题。',
      gains: '进一步了解React开发流程，对前端技术有更深入的理解。'
    },
    {
      title: '[展示2]To-do-list',
      time: '2025.7',
      tech: 'react+vite+js+Tailwind CSS',
      effects: '实现能增删查改的简单待办事项应用。',
      functions: '添加删除任务，任务状态切换，查找任务，添加天气组件，实现数据可视化。',
      gains: '这是接触react的第二个小项目，帮助我了解vite快速搭建项目框架，在修改该项目过程中对js有了更加深入的理解，为后续熟练使用打好基础。'
    },
    {
      title: '[展示3]一个可以暂停的时钟',
      time: '2025.7',
      tech: 'react+vite+js+Tailwind CSS+React Router Dom',
      effects: '能查看时间、暂停时间后继续计时的时钟',
      functions: '查看时间，暂停后能与电脑同步时间；能实现正向计时；可查看天气。',
      gains: '初步了解react框架，进一步了解js语法知识。'
    }
  ]

  return (
    <section className="main">
      {/* 教育经历 */}
      <section className="edu info-unit">
        <h2>
          <FaGraduationCap /> 教育经历
        </h2>
        <hr/>
        <ul>
          <li>
            <h3>
              <span>深圳职业技术大学 - 大数据工程技术专业（本科大一）</span>
              <time>2024.9-现在</time>
            </h3>
            <p>第一学期专业排名<mark>3/35</mark>，第二学期专业排名<mark>1/35</mark>，在此期间，学习专业课：python、Linux操作系统、数据库原理；自学了html5、css</p>
          </li>
        </ul>
      </section>

      {/* 实践经历 */}
      <section className="project info-unit">
        <h2>
          <FaTerminal /> 学习实践
        </h2>
        <hr/>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>
                <span>{project.title}</span>
                <time>{project.time}</time>
              </h3>
              <ul className="info-content">
                <li>技术栈：{project.tech}</li>
                <li>
                  <FaPaperPlaneO />
                  [效果]{project.effects}
                  <br/>
                  <FaUsers />
                  [功能]{project.functions}
                  {project.process && (
                    <>
                      <br/>
                      <FaBars />
                      [过程]{project.process}
                    </>
                  )}
                  <br/>
                  <FaThumbsOUp />
                  [收获]{project.gains}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* 自我评价 */}
      <section className="work info-unit">
        <h2>
          <FaPencil /> 自我评价/期望
        </h2>
        <hr/>
        <p>我为人友善真诚，做事细致专注，具备极强的责任心与执行力。学习能力与适应能力较强，不仅能较短时间掌握新知识和技能，更能主动探索未知领域。喜欢思考，这使我能够高效解决复杂挑战。同时，我乐于沟通协作，积极听取他人意见，取长补短，优化自身。对于认定的目标和机会，我愿意并能够投入大量时间和精力。虽然当前编程经验尚在积累中，前端开发的知识实践还有不足之处，但我坚信凭借强大的学习驱动力和主观能动性，我将借助大模型的力量，不断提升自身能力，实现自我完善，胜任项目要求。</p>
      </section>
    </section>
  )
}

export default MainContent
