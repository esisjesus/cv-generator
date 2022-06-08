import React from 'react'

export default function ContactInput() {
  return (
    <div>
        <label htmlFor="phone">Phone 📱</label>
        <input type="tel" name="phone" id="phone" />
        <label htmlFor="email">Email 📧</label>
        <input type="tel" name="email" id="email" placeholder='youremail@example.com'/>
        <label htmlFor="web">Website 🌐</label>
        <input type="url" name="url" id="web" placeholder="https://example.com"pattern="https://.*" />
    </div>
  )
}
