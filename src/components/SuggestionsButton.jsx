import React from 'react'

export default function SuggestionsButton(props) {
    return (
        <>
            <div className='row justify-content-center'>
                <button type='button' className='col-2 m-5' id='doSomethingButton'
                    onClick={props.handleClick}>
                    Do<br/>Something
                </button>
            </div>
        </>
    )
}
