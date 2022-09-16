import React from 'react'

export default function PriceSelect() {
    return (
        <>
            <select className="form-select" name='price'>
                <option defaultValue>Freeeeeeeeee</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
            </select>
        </>
    )
}
