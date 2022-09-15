import React from 'react'
import { Link } from 'react-router-dom'
import '../css/LoginForm.css'

export default function LoginForm() {
    return (
        <>
        <div className="row">
            <form id='loginForm'>

                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" 
                        name='username'/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" 
                        name='password'/>
                </div>

                <div>
                    <p>Not signed up yet?
                    <br/>Here's your first suggestion...
                    <br/><Link to="/signup">Sign Up Now!</Link>
                    </p>
                </div>
                
                <div className="col-5">
                    <button type="submit" className="btn btn-primary w-100"
                        id='submitButton'>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}
