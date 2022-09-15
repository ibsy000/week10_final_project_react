import React, { useEffect } from 'react'
import CategorySelect from './CategorySelect'
import ParticipantsSelect from './ParticipantsSelect'
import PriceSelect from './PriceSelect'
import { useNavigate } from 'react-router-dom'

export default function CreateSuggestionForm(props) {

    let navigate = useNavigate()

    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You have to be logged in to do that, silly', 'danger')
            navigate('/login')
        }
    })

    return (
        <>
            <div className="row">
                <form id='signUpForm'>

                    <div className="mb-3">
                        <label className="form-label">Activity</label>
                        <input type="text" className="form-control" id="activity" 
                            name='activity'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <CategorySelect />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Min. Participants Needed</label>
                        <ParticipantsSelect />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <PriceSelect />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Link</label>
                        <input type="text" className="form-control" id="link" 
                            name='link'/>
                    </div>

                    <div className='row m-5'>
                        <input type="submit" id='createSuggestionButton' value='Add Suggestion'/>
                    </div>
                </form>
            </div>
        </>
    )
}
