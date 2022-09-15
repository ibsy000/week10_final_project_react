import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUpForm() {
    return (
        <>
            <div className="row">
                <form id='signUpForm'>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" 
                            name='email'/>
                    </div>

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

                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="confirmPassword" className="form-control" 
                            id="confirmPassword" name='confirmPassword'/>
                    </div>

                    <div>
                    <p>Here by mistake?
                    <br/><Link to="/login">Login Now!</Link>
                    </p>
                </div>

                    <div className="col-5">
                    <input type="submit" id='submitButton' value='Submit'/>
                    </div>
                </form>
            </div>
        </>
    )
}
