import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUpForm(props) {

    let navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        
        // check that the passwords match
        let password = event.target.password.value
        let confirmPassword = event.target.confirmPassword.value

        // if passwords do not match
        if (password !== confirmPassword){
            props.flashMessage('Your passwords do not match. Please try again.', 'danger')
        // if passwords match set up request to Flask API
        } else {
            console.log('Your passwords match. Congrats!')

            // set headers to match Postman POST request
            let myHeaders = new Headers()
            myHeaders.append("Content-Type", "application/json")

            // stringify json data
            let formData = JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password: password // set variable for password data at start
            })
            // submit POST request to API server
            fetch("http://localhost:5000/api/users", {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.error){
                        console.error(data.error)
                    } else {
                        props.flashMessage(`${data.username} has signed up successfully.`, 'success')
                        navigate('/login')
                    }
                })
            }
        }

    return (
        <>
            <div className="row">
                <form id='signUpForm' onSubmit={handleSubmit}>

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
                        <input type="password" className="form-control" 
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
