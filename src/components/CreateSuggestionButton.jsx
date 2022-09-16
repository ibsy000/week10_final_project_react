import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateSuggestionButton() {

    let navigate = useNavigate()

    const handleClick = () => {
        navigate('/create')
    }

    return (
        <>
            <div className="row justify-content-between mt-5">
                <hr className='mt-5'/>
                <div className="col-9">
                    <h1>Want more personalized suggestions?</h1>
                    <h2>Start adding your own now!</h2>
                </div>
                <div className="col-3 align-self-center">
                    <button type='button' id='createSuggestionButton' onClick={handleClick}>
                        Add Suggestion
                    </button>
                </div>
            </div>
        </>
    )
}
