import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Index from './pages/Index'
import OurEngagement from './pages/OurEngagement'
import PvStatusAg from './pages/PvStatusAg'
import Members from './pages/Members'
import Companies from './pages/Companies'
import Labs from './pages/Labs'
import Competition from './pages/Competition'
import Contact from './pages/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/our-engagement" element={<OurEngagement/>} />
        <Route path="/pv-status-ag" element={<PvStatusAg/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/companies" element={<Companies/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="/competition" element={<Competition/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
)