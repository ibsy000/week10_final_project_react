import React, { useState } from 'react'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import HomePageBody from './components/HomePageBody'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Suggestions from './components/Suggestions'
import FlashMessage from './components/FlashMessage'
import CreateSuggestion from './components/CreateSuggestion'

export default function App() {

    const [message, setMessage] = useState(null)
    const [category, setCategory] = useState(null)
    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token')) 
        ? true : false)

    const flashMessage = (message, category) => {
        setMessage(message)
        setCategory(category)
    }
 
    const login = () => {
        setLoggedIn(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        setLoggedIn(false)
        flashMessage('You are now logged out. Come back soon!', 'success')
    }

    return (
        <>
            <div className="container">
                <Navbar logout={logout} loggedIn={loggedIn} />
                {message ? <FlashMessage message={message} category={category} 
                    flashMessage={flashMessage}/> : null}
                <Routes>
                    <Route path='/' element={
                        <>
                            <Carousel />
                            <HomePageBody loggedIn={loggedIn} flashMessage={flashMessage}/>
                        </>} />
                    <Route path='/login' element={<Login flashMessage={flashMessage}
                        login={login}/>} />
                    <Route path='/signup' element={<SignUp flashMessage={flashMessage}/>}/>
                    <Route path='/suggestions' element={<Suggestions loggedIn={loggedIn} flashMessage={flashMessage}/>} />
                    <Route path='/create' element={<CreateSuggestion loggedIn={loggedIn} flashMessage={flashMessage}/>} />
                </Routes>
                <Footer /> 
            </div> 
        </>
    )
}
