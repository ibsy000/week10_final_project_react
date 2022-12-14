import React from 'react'
import logo from '../assets/android-chrome-512x512.png'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/"> */}
                        <img src={logo} alt="WTD" width="50" height="50" />
                    {/* </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                        <Link className="nav-link" to="/">Home</Link>
                        <h1 className='m-2' id='nav-header'>What To Do</h1>
                        {props.loggedIn ?
                            <>
                                <Link className="nav-link" to='/' onClick={props.logout}>Logout</Link>
                            </>
                            :
                            <>
                                <Link className="nav-link" to='/login'>Login / Sign Up</Link>
                            </>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}