import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              首页
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              关于
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default App