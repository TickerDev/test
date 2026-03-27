import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [{ title: "Contact - Mr. Yee's Classroom" }],
  }),
  component: ContactPage,
})

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Message sent! Mr. Yee will get back to you soon.")
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Talk to Mr. Yee</h1>
        <p>Questions, feedback, or just want to say hello</p>
      </section>

      <div className="contact-wrapper">
        <div className="contact-card">
          <h2>Send a message</h2>
          <p>
            Fill out the form below and Mr. Yee will get back to you as soon as
            possible.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="What's on your mind?"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
