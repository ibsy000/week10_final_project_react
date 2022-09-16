import React from 'react'

export default function PriceSelect() {
    return (
        <>
            <select className="form-select" name='price'>
                <option defaultValue>Freeeeeeeeee</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
        </>
    )
}
