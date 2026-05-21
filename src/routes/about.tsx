import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        关于项目
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">这是一个使用 React + Vite 构建的现代化应用</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            本项目使用了现代化的前端技术栈：
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>React 18 + TypeScript</li>
            <li>Vite 快速构建工具</li>
            <li>React Router 路由管理</li>
            <li>Tailwind CSS 样式框架</li>
            <li>React Query 数据管理</li>
          </ul>

          <div className="mt-6">
            <Link to="/" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              返回首页
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}