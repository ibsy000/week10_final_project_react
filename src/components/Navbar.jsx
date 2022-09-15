import React from 'react'
import logo from '../assets/android-chrome-512x512.png'
import '../css/Nabar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/"> */}
                        <img src={logo} alt="WTD" width="30" height="30" />
                    {/* </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                        <Link className="nav-link" to="/">Home</Link>
                        <h1 className='m-0' id='nav-header'>What To Do</h1>
                        <Link className="nav-link" to='/login'>Login/Sign Up</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}