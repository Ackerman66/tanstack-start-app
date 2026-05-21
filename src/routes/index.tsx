import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        React + Vite 项目框架
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">🎯 功能特性</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• 基于 React + Vite 的现代化架构</li>
            <li>• 内置 React Query 用于数据管理</li>
            <li>• TypeScript 支持</li>
            <li>• Tailwind CSS 样式框架</li>
            <li>• React Router 路由管理</li>
            <li>• 开发服务器热重载</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">🚀 快速开始</h2>
          <ol className="space-y-2 text-gray-700">
            <li>1. 运行 <code className="bg-gray-100 px-1 rounded">npm install</code></li>
            <li>2. 运行 <code className="bg-gray-100 px-1 rounded">npm run dev</code></li>
            <li>3. 打开 http://localhost:3000</li>
          </ol>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">📁 项目结构</h2>
        <div className="bg-gray-100 rounded-lg p-4">
          <pre className="text-sm">
{`
src/
├── components/     # 可复用组件
├── hooks/         # 自定义 Hooks
├── routes/        # 路由文件
├── types/         # TypeScript 类型定义
└── utils/         # 工具函数

vite.config.ts     # Vite 配置
`}
          </pre>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">🔗 快速导航</h2>
        <div className="space-x-4">
          <Link to="/about" className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            查看关于页面
          </Link>
        </div>
      </div>
    </div>
  )
}