import { useState } from 'react'
import './Contact.css'
import Button from './Button'
import { submitContactForm, isValidEmail } from '../utils/firestore'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!formData.email.trim()) {
      setError('Please enter your email')
      return
    }
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      await submitContactForm(formData)

      // Success feedback
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        service: '',
        message: '',
      })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error('Form submission error:', err)
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact">
      <div className="contact-glow" />
      <div className="contact-inner">

        <div className="contact-left reveal">
          <div className="section-tag">Get in touch</div>
          <div className="contact-big">
            LET'S<br />BUILD<br /><span className="accent">TOGETHER</span>
          </div>
          <p className="contact-desc">
            Ready to dominate your market online? Tell us about your project and we'll send a custom proposal in 48 hours — no obligation.
          </p>
          <div className="contact-info">
            <div className="contact-line">
              <div className="contact-icon">✉</div>
              <div className="contact-text">
                <strong>Email</strong>
                hello@webify.cx
              </div>
            </div>
            <div className="contact-line">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <strong>Location</strong>
                Karachi, Pakistan · Canada
              </div>
            </div>
            <div className="contact-line">
              <div className="contact-icon">⚡</div>
              <div className="contact-text">
                <strong>Response Time</strong>
                Within 24 hours guaranteed
              </div>
            </div>
            <div className="contact-line">
              <div className="contact-icon">📅</div>
              <div className="contact-text">
                <strong>Book a Call</strong>
                calendly.com/webify
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form reveal">
          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && <div className="form-error">{error}</div>}

            {/* Success Message */}
            {submitted && <div className="form-success">✓ Message sent successfully! We'll be in touch within 24 hours.</div>}

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ahmed Khan"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ahmed@company.com"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>
              <div className="form-field">
                <label htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget...</option>
                  <option value="$3,000 – $5,000">$3,000 – $5,000</option>
                  <option value="$5,000 – $15,000">$5,000 – $15,000</option>
                  <option value="$15,000 – $30,000">$15,000 – $30,000</option>
                  <option value="$30,000+">$30,000+</option>
                  <option value="Retainer ($2,500+/mo)">Retainer ($2,500+/mo)</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="service">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select service...</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="SaaS Product">SaaS Product</option>
                <option value="IT Consulting">IT Consulting</option>
                <option value="Monthly Retainer">Monthly Retainer</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your vision, goals, and timeline. The more detail, the better our proposal..."
              />
            </div>

            <Button
              variant="form"
              type="submit"
              disabled={loading}
              className={submitted ? 'submitted' : ''}
            >
              {loading ? 'Sending...' : submitted ? 'Message Sent ✓' : 'Launch a Project →'}
            </Button>
          </form>
        </div>

      </div>
    </section>
  )
}
