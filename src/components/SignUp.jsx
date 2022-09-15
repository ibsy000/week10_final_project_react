import React from 'react'
import SignUpForm from './SignUpForm'


export default function SignUp(props) {
    return (
        <>
            <div className="row justify-content-center">
                <div className="card" style={{width: '30rem'}}>
                    <h1 className='text-center'>
                        Looks like you took my suggestion afterall</h1>
                    <div className="card-body">
                        <SignUpForm flashMessage={props.flashMessage}/>
                    </div>
                </div>
            </div>
        </>
    )
}
