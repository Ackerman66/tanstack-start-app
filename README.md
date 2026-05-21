# TanStack Start 项目框架

基于 Vite + React + React Router + Tailwind CSS 的现代化 Web 应用框架。

## 🚀 快速开始

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

4. 预览构建结果：
```bash
npm run preview
```

## 📁 项目结构

```
src/
├── components/     # 可复用组件
│   └── Button.tsx
├── hooks/         # 自定义 Hooks
│   └── useFetch.ts
├── routes/        # 路由页面
│   ├── index.tsx   # 首页
│   └── about.tsx   # 关于页面
├── types/         # TypeScript 类型
│   └── index.ts
├── utils/         # 工具函数
│   ├── api.ts
│   └── cn.ts
├── App.tsx        # 主组件
├── main.tsx       # 入口文件
└── index.css     # 样式入口
```

## 🎯 主要特性

- ⚡ Vite 快速构建
- 🎨 Tailwind CSS 样式
- 🛤️ React Router 路由
- 📦 React Query 数据管理
- 📝 TypeScript 类型安全
- 🔄 热重载开发

## 📦 可用命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览构建结果
- `npm run lint` - 代码检查
- `npm run type-check` - 类型检查
- `npm run deploy` - 部署到 GitHub Pages

## 🚀 部署到 GitHub Pages

1. Fork 或克隆此仓库
2. 安装依赖：`npm install`
3. 构建项目：`npm run build`
4. 部署：`npm run deploy`

项目将自动部署到 GitHub Pages，可以通过 `https://你的用户名.github.io/tanstack-start-app` 访问。

## 🌐 在线演示

[项目演示地址](https://你的用户名.github.io/tanstack-start-app)