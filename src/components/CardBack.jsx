import React from 'react'
import { Link } from 'react-router-dom'

export default function CardBack(props) {
    return (
        <>
            {props.suggestions.length > 0 ? 
                <>
                    <h1>{props.suggestions[props.random_id].activity}</h1>
                    <hr/>

                    <h4>{(props.suggestions[props.random_id].category)}</h4> 
                    <hr/>
                    
                    <p><b>Min. Participants:</b> <i>{props.suggestions[props.random_id].participants}</i></p>

                    {props.suggestions[props.random_id].price === '' ?
                        <p><b>Price:</b> <i>Freeeeeeeeee</i></p>
                        :
                        <p><b>Price:</b> <i>{props.suggestions[props.random_id].price}</i></p>
                    }

                    <hr/>
                    <p><b>Resources:</b></p>

                    {props.suggestions[props.random_id].link ?
                        <>
                            <Link id='link' onClick={() => window.open(props.suggestions[props.random_id].link, "_blank")}>
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
        </>
    )
}
