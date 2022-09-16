import React from 'react'

export default function FilterBy() {
    return (
        <>
            <div className="col-4">
                <label className="form-select-label mb-2 ms-2"><b>Filter By:</b></label>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>All</option>
                    <option value="1">Personal Suggestions</option>
                    <option value="2">Price: $</option>
                    <option value="3">Price: $$</option>
                    <option value="4">Price: $$$</option>
                    <option value="5">Price: $$$$</option>
                    <option value="6">Min. Participants: Any</option>
                    <option value="7">Min. Participants: 1</option>
                    <option value="8">Min. Participants: 2</option>
                    <option value="9">Min. Participants: 3</option>
                    <option value="10">Min. Participants: 4</option>
                    <option value="11">Min. Participants: 5</option>
                    <option value="12">Min. Participants: 6</option>
                </select>
            </div>
        </>
    )
}
