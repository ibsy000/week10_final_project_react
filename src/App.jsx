import React from 'react'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import HomePageBody from './components/HomePageBody'
import Navbar from './components/Navbar'

export default function App() {
    return (
        <>
            <div className="container">
                <Navbar />
                <Carousel />
                <HomePageBody />
                <Footer />
            </div>
        </>
    )
}
