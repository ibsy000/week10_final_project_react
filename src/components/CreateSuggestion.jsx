import React from 'react'
import CreateSuggestionForm from './CreateSuggestionForm'

export default function CreateSuggestion(props) {
    return (
        <>
            <div className="row justify-content-center">
                <div className="card" style={{width: '30rem'}}>
                    <h1 className='text-center display-6'>
                        Personalize suggestions by creating a new one!</h1>
                    <div className="card-body">
                        <CreateSuggestionForm loggedIn={props.loggedIn} flashMessage={props.flashMessage}/>
                    </div>
                </div>
            </div>
        </>
    )
}
