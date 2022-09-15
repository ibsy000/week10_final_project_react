import React, { useEffect } from 'react'
import CreateSuggestionButton from './CreateSuggestionButton'
import SuggestionCards from './SuggestionCards'
import SuggestionsButton from './SuggestionsButton'
import SuggestionsDropDown from './SuggestionsDropDown'
import { useNavigate } from 'react-router-dom'

export default function Suggestions(props) {

    let navigate = useNavigate()

    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You have to be logged in to do that, silly', 'danger')
            navigate('/login')
        }
    })

    return (
        <>
            <div className='text-center mt-3' id="header">
                <h2>Customize your suggestions</h2>
                <h3>Or not...</h3>
                <h2>And go with the flow!</h2>
            </div>
            <SuggestionsDropDown />
            <SuggestionsButton />
            <SuggestionCards />
            <CreateSuggestionButton />
        </>
    )
}
