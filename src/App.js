import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login/Login';
import AdminDashboard from './pages/adminDashboard/AdminDashboard'

const App = () => {
  return (
    <div className="bg-black text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
