import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DayviewTimesheet from './DayviewTimesheet.jsx'
import Notfound from './Notfound.jsx'
import WeekviewTimesheet from './WeekviewTimesheet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/dayviewtimesheet' element={<DayviewTimesheet />} />
        <Route path='/weekviewtimesheet' element={<WeekviewTimesheet />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
