import { useState } from 'react'
import styles from '../styles/Home.module.css'

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '1:00 PM',  '1:30 PM',  '2:00 PM',  '2:30 PM',
  '6:00 PM',  '6:30 PM',  '7:00 PM',  '7:30 PM',
  '8:00 PM',  '8:30 PM',  '9:00 PM',  '9:30 PM',
  '10:00 PM', '10:30 PM'
]

export default function Reservations() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    requests: ''
  })
  const [confirmed, setConfirmed] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.date || !form.time) {
      alert('Please fill in all required fields.')
      return
    }
    setConfirmed(true)
  }

  return (
    <div>
      <nav className={styles.navbar}>
        <div>
          <a href="https://manasa1864.github.io/Palm-and-Pine/project.html">Home</a>
          <a href="https://manasa1864.github.io/Palm-and-Pine/about.html">About</a>
          <a href="https://manasa1864.github.io/Palm-and-Pine/reviews.html">Reviews</a>
          <a href="https://manasa1864.github.io/Palm-and-Pine/menu-search.html">Menu Search</a>
        </div>
      </nav>

      <h1 className={styles.heading}>Reserve a Table</h1>

      <div className={styles.container}>
        {confirmed ? (
          <div className={styles.confirmation}>
            <h2>Booking Confirmed!</h2>
            <p>Thank you, <strong>{form.name}</strong>!</p>
            <p>Your table for <strong>{form.guests} {form.guests === '1' ? 'guest' : 'guests'}</strong> is reserved on <strong>{form.date}</strong> at <strong>{form.time}</strong>.</p>
            <p>A confirmation will be sent to <strong>{form.email}</strong>.</p>
            <br />
            <button className={styles.btn} onClick={() => { setConfirmed(false); setForm({ name: '', email: '', date: '', time: '', guests: '2', requests: '' }) }}>
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
            />

            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />

            <label>Date *</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />

            <label>Time *</label>
            <select name="time" value={form.time} onChange={handleChange}>
              <option value="">Select a time</option>
              {timeSlots.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            <label>Number of Guests</label>
            <select name="guests" value={form.guests} onChange={handleChange}>
              {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>

            <label>Special Requests</label>
            <textarea
              name="requests"
              placeholder="Any dietary requirements, special occasions, etc."
              value={form.requests}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className={styles.btn}>Reserve Now</button>
          </form>
        )}
      </div>
    </div>
  )
}
