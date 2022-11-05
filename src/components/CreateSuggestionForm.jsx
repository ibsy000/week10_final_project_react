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

    const handleSubmit = event => {
        event.preventDefault()

        let myHeaders = new Headers()
        let myToken = localStorage.getItem('token')

        myHeaders.append("Authorization", "Bearer " + myToken)
        myHeaders.append("Content-Type", "application/json")

        let formData = JSON.stringify({
            "activity": event.target.activity.value,
            "category": event.target.category.value,
            "participants": event.target.participants.value,
            "price": event.target.price.value,
            "link": event.target.link.value
        })

        fetch("https://jelly-coral-lion.glitch.me/api/suggestions", {
            method: 'POST',
            headers: myHeaders,
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if (data.error){
                console.error(data.error)
            } else {
                props.flashMessage(`${data.activity} has been added to the suggestions! Hooray!`, 'success')
                navigate('/suggestions')
            }
        })
    }

    return (
        <>
            <div className="row">
                <form id='signUpForm' onSubmit={handleSubmit}>

                    <div className="mb-3">
                    <label className="form-select-label mb-2 ms-2"><b>Activity:</b></label>
                        <input type="text" className="form-control" id="activity" 
                            name='activity'/>
                    </div>
                    <div className="mb-3">
                        <CategorySelect />
                    </div>

                    <div className="mb-3">
                        <label className="form-select-label mb-2 ms-2"><b>Min. Participants Needed</b></label>
                        <ParticipantsSelect />
                    </div>

                    <div className="mb-3">
                        <label className="form-select-label mb-2 ms-2"><b>Price:</b></label>
                        <PriceSelect />
                    </div>

                    <div className="mb-3">
                        <label className="form-select-label mb-2 ms-2"><b>Link:</b></label>
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
