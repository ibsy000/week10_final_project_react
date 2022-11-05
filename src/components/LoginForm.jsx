import React from 'react'
import { Link } from 'react-router-dom'
import '../css/LoginForm.css'
import { useNavigate } from 'react-router-dom'

export default function LoginForm(props) {

    let navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault()

        let username = event.target.username.value
        let password = event.target.password.value

        let myHeaders = new Headers()
        myHeaders.append('Authorization', 'Basic ' + btoa(`${username}:${password}`))
        
        let response = await fetch("https://jelly-coral-lion.glitch.me/api/token", { 
                method: 'POST',
                headers: myHeaders
            })
        if (response.ok){

            let data = await response.json()

            localStorage.setItem('token', data.token)
            localStorage.setItem('username', username) //POSSIBLY READDRESS THIS LATER

            props.login()

            props.flashMessage(`Hey, ${username} thanks for logging in. Welcome back!`, 'success')
            navigate('/')
        } else {
            props.flashMessage('Your username and/or password are incorrect', 'danger')
        }
    }

    return (
        <>
        <div className="row">
            <form id='loginForm' onSubmit={handleSubmit}>

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
                    <input type="submit" id='submitButton' value='Submit' />
                </div>
            </form>
        </div>
        </>
    )
}
