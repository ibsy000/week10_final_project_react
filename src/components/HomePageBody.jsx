import React from 'react'
import '../css/BigRedButton.css'
import { useNavigate } from 'react-router-dom'
import '../css/HomePageBody.css'

export default function HomePageBody(props) {
    let navigate = useNavigate()
    

    const handleClick = () => {
        return(
            navigate('/suggestions')
        )
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className='display-4 text-center mt-5' id='homeHeader'>Quit Procrastinating</div>
                <button type='button' className='col-2 m-5' id='doSomethingButton'
                    onClick={handleClick}>
                    DO<br/>SOMETHING
                </button>
                <div className='display-6 text-center mb-5 mt-3'>
                    Go on.. push the big red button 
                    <br/>
                    I know you want to
                </div>
            </div>
        </>
    )
}
