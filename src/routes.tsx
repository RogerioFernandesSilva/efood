import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import Restaurant from './pages/Home/Restaurant'

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
    </Routes>
)

export default AppRoutes

