import React from 'react'

export default function ExperienceInput() {

    return (
        <div>
            <label htmlFor="experience">Job Title 💼</label>
            <input type="text" id="experience" placeholder='Job Title'/>
            <span>From:</span>
            <input type="number" min="1950" max={new Date().getFullYear() }step="1" placeholder={new Date().getFullYear() } />
            <span>To:</span>
            <input type="number" min="1950" max={new Date().getFullYear() } step="1" placeholder={new Date().getFullYear() } />
            <label htmlFor="description">Job Description</label>
            <input type="textarea" id="description"/>
        </div>
    )
}
