import React, { useEffect, useState } from 'react'
import CreateSuggestionButton from './CreateSuggestionButton'
import SuggestionCards from './SuggestionCards'
import SuggestionsButton from './SuggestionsButton'
import SuggestionsDropDown from './SuggestionsDropDown'
import { useNavigate } from 'react-router-dom'

export default function Suggestions(props) {

    let navigate = useNavigate()

    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You have to be logged in to do that, silly', 'danger')
            navigate('/login')
        }
    })

    const handleClickTrue = () => {
        setClicked(true)
    }

    const handleClickFalse = () => {
        setClicked(false)
    }


    return (
        <>
            <div className='text-center mt-3' id="header">
                <h2>Customize your suggestions</h2>
                <h3>Or not...</h3>
                <h2>And go with the flow!</h2>
            </div>
            <SuggestionsDropDown />
            <SuggestionsButton handleClickTrue={handleClickTrue} 
                handleClickFalse={handleClickFalse} clicked={clicked}/>
            {clicked ? 
                <SuggestionCards clicked={clicked}/>
                :
                <h1 className='text-center display-1'>Hit that big red button already</h1>
            }
            <CreateSuggestionButton />
        </>
    )
}
