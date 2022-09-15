import React from 'react'

export default function FilterBy() {
    return (
        <>
            <div className="col-4">
                <select class="form-select" aria-label="Default select example">
                    <option selected>All</option>
                    <option value="1">Price: $</option>
                    <option value="2">Participants: Any</option>
                    <option value="3">Personal Suggestions</option>
                </select>
            </div>
        </>
    )
}
