import React from 'react'
import './SideNav.css'

const SideNav = () => {
  const links = [
    {
      name: '学习笔记',
      url: 'https://github.com/splaaaaa/studying-notes',
      target: '_blank'
    },
    {
      name: '任务仓库',
      url: 'https://github.com/splaaaaaa/study-project.git',
      target: '_blank'
    },
    {
      name: '博客',
      url: '#',
      target: '_blank'
    }
  ]

  return (
    <aside>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target={link.target} rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideNav
