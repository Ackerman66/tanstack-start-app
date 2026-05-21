


# TanStack Start Todo 示例

一个基于 [TanStack Start](https://tanstack.com/start) 构建的全栈 Todo 应用，演示了 SSR（服务端渲染）、文件路由、API 路由（Server Functions）以及 TanStack Query 的集成。

## 技术栈

- **框架**: TanStack Start (React + Vite)
- **路由**: TanStack Router (基于文件的路由系统)
- **数据获取**: TanStack Query
- **样式**: 无额外依赖 (可自行添加 Tailwind CSS 等)
- **语言**: TypeScript



## 项目结构
my-tanstack-start-app/
├── app/                     # 应用主目录（基于文件系统的路由）
│   ├── __root.tsx           # 根路由布局（全局包裹）
│   ├── index.tsx            # 首页路由： "/"
│   ├── about.tsx            # 关于页： "/about"
│   ├── posts/
│   │   ├── $postId.tsx      # 动态路由： "/posts/123"
│   │   └── index.tsx        # 帖子列表： "/posts"
│   ├── api/                 # API 路由（服务端函数）
│   │   └── posts.ts         # 示例 API
│   └── ssr.tsx              # SSR 入口（服务端渲染配置）
├── public/                  # 静态资源
├── vite.config.ts           # Vite 配置
├── tsconfig.json            # TypeScript 配置
├── package.json
└── ...



## 功能特性

- ✅ 文件系统路由 (`/`, `/todos`)
- ✅ 服务端渲染 (SSR) 与客户端 hydration
- ✅ 服务端函数 (API 路由) 直接导入调用，无需额外 HTTP 请求
- ✅ 使用 TanStack Query 进行数据获取、缓存和乐观更新
- ✅ 新增 / 删除 Todo
- ✅ 完全类型安全 (TypeScript)

## 快速开始

1. **克隆或创建项目**

   ```bash
   npx create-tanstack-app@latest my-tanstack-start-app
   cd my-tanstack-start-app