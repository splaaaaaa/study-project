# 佘培琳个人简历 - React版本

这是一个使用React + Vite构建的个人简历项目，将原有的HTML+CSS版本转换为现代化的React组件化架构。

## 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **React Icons** - 图标库
- **CSS3** - 样式

## 项目结构

```
resume-react/
├── public/                 # 静态资源
│   ├── background.png     # 背景图片
│   ├── favicon.ico        # 网站图标
│   └── spl.jpg           # 头像图片
├── src/
│   ├── components/        # React组件
│   │   ├── Sidebar.jsx    # 侧边栏组件
│   │   ├── MainContent.jsx # 主要内容组件
│   │   ├── Footer.jsx     # 页脚组件
│   │   ├── SideNav.jsx    # 侧边导航组件
│   │   └── *.css          # 组件样式文件
│   ├── App.jsx           # 主应用组件
│   ├── App.css           # 主应用样式
│   └── main.jsx          # 应用入口
├── index.html            # HTML模板
└── package.json          # 项目配置
```

## 功能特性

- ✅ 响应式设计，支持移动端
- ✅ 组件化架构，易于维护
- ✅ 加载动画效果
- ✅ 技能进度条展示
- ✅ 项目经验展示
- ✅ 外部链接导航

## 开发运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

## 组件说明

### Sidebar组件
- 个人信息展示
- 联系方式
- 技能进度条
- 头像加载动画

### MainContent组件
- 教育经历
- 学习实践项目
- 自我评价

### SideNav组件
- 外部链接导航
- 悬停动画效果

## 样式特点

- 使用Flexbox布局
- 响应式设计
- 现代化的阴影和圆角效果
- 平滑的过渡动画

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 作者

佘培琳 - 前端开发学习者
