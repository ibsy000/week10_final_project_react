import React from 'react'
import '../css/BigRedButton.css'
import { useNavigate } from 'react-router-dom'

export default function HomePageBody() {
    let navigate = useNavigate()

    const clickDoSomethingButton = () => {
        navigate('/suggestions')
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className='display-1 text-center mt-3'>Quit Procrastinating</div>
                <button type='button' className='col-2 m-5' id='doSomethingButton'
                    onClick={clickDoSomethingButton}>
                    Do<br/>Something
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
