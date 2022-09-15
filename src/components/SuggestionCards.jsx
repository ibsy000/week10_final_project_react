import React from 'react'
import '../css/SuggestionCards.css'

export default function SuggestionCards() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h1 id='reveal'>Hover over card to reveal</h1>
                        </div>
                        <div className="flip-card-back">
                            <h1>Clean out your closet</h1>
                            <hr/>
                            <h4>Busywork</h4> 
                            <hr/>
                            <p><b>Min. Participants:</b> <i>1</i></p>
                            <p><b>Price:</b></p>
                            <hr/>
                            <p><b>Resources:</b></p>
                            <a id='link' href='https://www.minimalismmadesimple.com/home/clean-out-closet/'>
                                Here's a helpful link to inspire you to <i>just do it</i>!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
