import React, { useEffect, useState } from 'react'

export default function CategorySelect() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/suggestions")
            .then(response => response.json())
            .then(data => {
                let suggestionData = data
                setSuggestions(suggestionData)
            })
    }, [])

    let categories = []

    {suggestions.map((suggestion, idx) => {
        if (!categories.includes(suggestion.category)){
            categories.push(suggestion.category)
        }
        return (
            categories.sort()
        )
    })}

    return (
        <>
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Random</option>
                    {categories.map((category, idx) => {
                        return (
                            <option value={idx + 1} key={idx}>{category}</option>
                        )}
                    )}
                </select>
        </>
    )
}
