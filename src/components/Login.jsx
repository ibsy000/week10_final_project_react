import React from 'react'
import LoginForm from './LoginForm'
import '../css/Login.css'

export default function Login() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="card" style={{width: '30rem'}}>
                    <h1 className='text-center'>Get Started Doing Something</h1>
                    <div className="card-body">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}
