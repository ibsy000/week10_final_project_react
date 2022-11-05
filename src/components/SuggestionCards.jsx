import React, { useEffect, useState } from 'react'
import '../css/SuggestionCards.css'
import CardBack from './CardBack'

export default function SuggestionCards(props) {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch("https://jelly-coral-lion.glitch.me/api/suggestions")
            .then(response => response.json())
            .then(data => {
                let suggestionData = data
                setSuggestions(suggestionData)
            })
    }, [])


    function getRandomId(max) {
        return Math.floor(Math.random() * max)
    }


    let random_id = getRandomId(suggestions.length)


    return (
        <>
            <div className="row justify-content-center">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1 id='reveal'>Hover over card to reveal</h1>
                        </div>
                        <div className="flip-card-back">
                            <CardBack suggestions={suggestions} random_id={random_id}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
