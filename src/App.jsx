import React from 'react'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import HomePageBody from './components/HomePageBody'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'

export default function App() {
    return (
        <>
            <div className="container">
                <Navbar />
                <Routes>
                    <Route path='/' element={
                        <>
                            <Carousel />
                            <HomePageBody />
                        </>} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                <Footer /> 
            </div> 
        </>
    )
}
