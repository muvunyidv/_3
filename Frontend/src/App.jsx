import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import AddDrug from './pages/AddDrug'
import EditDrug from './pages/EditDrug'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow p-4 mb-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Pharmacy System</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            <Link to="/add" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Drug</Link>
          </div>
        </nav>
        <div className="px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddDrug />} />
            <Route path="/edit/:id" element={<EditDrug />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
