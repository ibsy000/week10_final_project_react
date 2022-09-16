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
                <div className="col-9" id='personalizedSuggestions'>
                    <h2 className='display-5'>Want more personalized suggestions?</h2>
                    <h3 className='display-6'>Start adding your own now!</h3>
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
