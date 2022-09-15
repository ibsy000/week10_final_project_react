import React from 'react'

export default function CreateSuggestionButton() {
    return (
        <>
            <div className="row justify-content-between mt-5">
                <hr/>
                <div className="col-9">
                    <h1>Want more personalized suggestions?</h1>
                    <h2>Start adding your own now!</h2>
                </div>
                <div className="col-3 align-self-center">
                    <button type='button' id='createSuggestionButton'>
                        Add Suggestion
                    </button>
                </div>
            </div>
        </>
    )
}
