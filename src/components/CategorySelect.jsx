import React from 'react'

export default function CategorySelect() {
    return (
        <>
            <div className="col-4">
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Random</option>
                    <option value="1">Outdoor Recreational</option>
                    <option value="2">Educational</option>
                    <option value="3">Entertainment</option>
                </select>
            </div>
        </>
    )
}
