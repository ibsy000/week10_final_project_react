import React from 'react'
import CreateSuggestionForm from './CreateSuggestionForm'

export default function CreateSuggestion() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="card" style={{width: '30rem'}}>
                    <h1 className='text-center'>
                        Personalize suggestions by created a new one!</h1>
                    <div className="card-body">
                        <CreateSuggestionForm />
                    </div>
                </div>
            </div>
        </>
    )
}
