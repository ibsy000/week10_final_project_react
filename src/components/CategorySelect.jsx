import React, { useEffect, useState } from 'react'

export default function CategorySelect() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        fetch("https://jelly-coral-lion.glitch.me/api/suggestions")
            .then(response => response.json())
            .then(data => {
                let suggestionData = data
                setSuggestions(suggestionData)
            })
    }, [])

    let categories = []

    suggestions.map((suggestion, idx) => {
        if (!categories.includes(suggestion.category)){
            categories.push(suggestion.category)
        }
        return (
            categories.sort()
        )
    })

    return (
        <>      
            <label className="form-select-label mb-2 ms-2"><b>Category:</b></label>
                <select className="form-select" name='category'>
                    <option defaultValue>Random</option>
                    {categories.map((category, idx) => {
                        return (
                            <option value={category} key={idx}>{category}</option>
                        )}
                    )}
                </select>
        </>
    )
}
