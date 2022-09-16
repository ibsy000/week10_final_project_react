import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/SuggestionCards.css'

export default function SuggestionCards(props) {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/suggestions")
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
                            {suggestions.length > 0 ? 
                                <>
                                    <h1>{suggestions[random_id].activity}</h1>
                                    <hr/>
                                    <h4>{(suggestions[random_id].category)}</h4> 
                                    <hr/>
                                    <p><b>Min. Participants:</b> <i>{suggestions[random_id].participants}</i></p>
                                    {suggestions[random_id].price === '' ?
                                        <p><b>Price:</b> <i>Freeeeeeeeee</i></p>
                                        :
                                        <p><b>Price:</b> <i>{suggestions[random_id].price}</i></p>
                                    }
                                    <hr/>
                                    <p><b>Resources:</b></p>
                                    {suggestions[random_id].link ?
                                        <>
                                            <Link id='link' onClick={() => window.open(suggestions[random_id].link, "_blank")}>
                                                Here's a helpful link to inspire you to <i>just do it</i>!
                                            </Link>
                                        </>
                                        : <p><i>Sorry there are no resources but that's no excuse!
                                            <br/>
                                            Just do it!</i></p>
                                    }
                                </>
                                :
                                <h1>Where's my suggestion?</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
