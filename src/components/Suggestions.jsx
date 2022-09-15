import React from 'react'
import SuggestionsDropDown from './SuggestionsDropDown'

export default function Suggestions() {
    return (
        <>
            <div className='text-center mt-3' id="header">
                <h2>Customize your suggestions</h2>
                <h3>Or not...</h3>
                <h2>And go with the flow!</h2>
            </div>
            <SuggestionsDropDown />
        </>
    )
}
