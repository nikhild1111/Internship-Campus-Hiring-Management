import { Routes, Route } from 'react-router-dom'
import Admin from './AdminComponent/Admin'
import Navbar from './studentComponent/Shared/Navbar'
import JobCard from './studentComponent/Jobs/JobCard'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<JobCard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
