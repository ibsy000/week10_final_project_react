import React from 'react'
import CategorySelect from './CategorySelect'
import FilterBy from './FilterBy'

export default function SuggestionsDropDown() {
    return (
        <>
            <div className="row">
                <div className="d-flex justify-content-evenly mt-4">
                    <CategorySelect />
                    <FilterBy />
                </div>
            </div>
        </>
    )
}
