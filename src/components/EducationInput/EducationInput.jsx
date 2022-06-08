import React from 'react'

export default function EducationInput() {
  return (
    <div>
        <div>
            <label htmlFor="institution">Institution 📚</label>
            <input type="text" id="institution" placeholder='MIT'/>
            <span>From:</span>
            <input type="number" min="1950" max={new Date().getFullYear() }step="1" placeholder={new Date().getFullYear() } />
            <span>To:</span>
            <input type="number" min="1950" max={new Date().getFullYear() } step="1" placeholder={new Date().getFullYear() } />
            <label htmlFor="title">Title🎓</label>
            <input type="text" id="title" placeholder='Graduate'/>
        </div>
    </div>
  )
}
