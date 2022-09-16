import React from 'react'

export default function SuggestionsButton(props) {
    return (
        <>
            <div className='row justify-content-center'>
                <button type='button' className='col-2 m-5' id='doSomethingButton'
                    onClick={props.clicked ?
                        props.handleClickFalse
                        : 
                        props.handleClickTrue}>
                    Do<br/>Something
                </button>
            </div>
        </>
    )
}
