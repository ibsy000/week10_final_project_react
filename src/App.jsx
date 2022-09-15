import React from 'react'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'

export default function App() {
    return (
        <>
            <div className="container">
                <Navbar />
                <Carousel />
            </div>
        </>
    )
}
