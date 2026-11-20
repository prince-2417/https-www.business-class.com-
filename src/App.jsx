import { useState } from 'react'
import './App.css'
import londonImg from './assets/london.jpg'
import parisImg from './assets/paris.jpg'
import romeImg from './assets/rome.jpg'
import dubaiImg from './assets/dubai.jpg'
import journeyImg from './assets/journey.jpg'
import cabinImg from './assets/cabin.jpg'

const Icon = ({ name, size = 20 }) => {
  const paths = {
    plane: <><path d="M22 2 9.5 14.5"/><path d="m22 2-7 20-5-7-7-5Z"/><path d="m10 10 4 4"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const destinations = [
  { city: 'London, United Kingdom', image: londonImg, price: '$1,929' },
  { city: 'Paris, France', image: parisImg, price: '$2,000' },
  { city: 'Rome, Italy', image: romeImg, price: '$2,025' },
  { city: 'Dubai, UAE', image: dubaiImg, price: '$1,909' },
]

const faqs = [
  ['Why should I fly in business or first class seat on a lie-flat?', 'It provides a private, spacious cabin, lie-flat seating, premium dining and priority airport services for a far more comfortable journey.'],
  ['Are my payments secure on this site?', 'Yes. We use secure payment processing and never store sensitive card details on our servers.'],
  ['How do I book a flight through our Business Class Limo?', 'Enter your route and travel dates above, or call our travel advisors for a tailor-made itinerary.'],
  ['What happens if I need to change or cancel my booking?', 'Your fare rules determine any change or cancellation terms. Our team will explain all options before purchase.'],
  ['How can I pay for my booking?', 'We accept major credit cards and secure bank transfers. Flexible payment options may be available on selected fares.'],
  ['In business class worth it?', 'For longer trips, business class offers rest, service and airport conveniences that can make the journey as enjoyable as the destination.'],
  ['When is the optimal time to book the cheapest flight ticket?', 'Booking windows vary by route, but flexible dates and advance booking often provide the best selection and value.'],
  ['Do I earn frequent flyer miles on discounted business class bookings?', 'Most eligible fares earn miles. Tell us your loyalty program number and we will confirm earning eligibility.'],
]

function App() {
  const [tripType, setTripType] = useState('Round trip')
  const [openFaq, setOpenFaq] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <section className="hero-section" id="home">
        <div className="hero-overlay"></div>
        <nav className="nav-shell">
          <a className="brand" href="#home" aria-label="Business Class home">
            <span className="brand-mark"><Icon name="plane" size={17}/></span>
            <span>BUSINESS CLASS</span>
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
            <a href="#support" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          </div>
          <a className="nav-phone" href="tel:+18775550148"><Icon name="phone" size={16}/> +1 877 555 0148</a>
        </nav>

        <div className="hero-content">
          <form className="booking-card" onSubmit={(e) => { e.preventDefault(); }}>
            <label>Round Trip
              <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
                <option>Round trip</option><option>One way</option><option>Multi-city</option>
              </select>
            </label>
            <label>Flying from
              <input defaultValue="Congo Town, Unigned States" aria-label="Flying from"/>
            </label>
            <label>Flying to
              <input defaultValue="Dubai, United Arab Emirates" aria-label="Flying to"/>
            </label>
            <div className="date-row">
              <label>Depart
                <input type="text" defaultValue="20, Nov 27" aria-label="Departure date"/>
              </label>
              <label>Return
                <input type="text" defaultValue="Thu, Dec 4" aria-label="Return date"/>
              </label>
            </div>
            <button type="submit" className="search-button">Check Your Price <Icon name="search" size={16}/></button>
            <div className="advisor">
              <span className="advisor-avatar">BC</span>
              <div><strong>Call an 800-505-3293</strong><small>Phone consultations, instant</small></div>
            </div>
          </form>

          <div className="hero-copy">
            <p className="eyebrow">PREMIUM TRAVEL, PERSONALLY CURATED</p>
            <h1>Experience<br/>Business Class<br/>Luxury for Less</h1>
            <p className="hero-subtitle">Save 30-60% on Business and First Class fares<br/>— personalized by true travel experts.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#destinations">Explore destinations <Icon name="arrow" size={17}/></a>
              <a className="play-button" href="#reviews" aria-label="Watch our story"><span>▶</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="airlines">
        <h3>Customized flights with top airlines</h3>
        <p>Fly with Qatar, Emirates, Lufthansa and more with unbeatable deals.</p>
        <div className="airline-row" aria-label="Top airlines">
          {['Emirates','QATAR','Lufthansa','AIRBUS','SWISS','BRITISH'].map((name, i) => <span key={name} className={`airline-logo logo-${i}`}>{name}</span>)}
        </div>
      </section>

      <section className="destinations section" id="destinations">
        <div className="section-heading">
          <div><p className="kicker">Popular destinations</p><h2>Made for your next escape</h2></div>
          <div className="slider-arrows"><button aria-label="Previous destination">←</button><button aria-label="Next destination">→</button></div>
        </div>
        <div className="destination-grid">
          {destinations.map((item) => (
            <article className="destination-card" key={item.city}>
              <div className="destination-image"><img src={item.image} alt={item.city}/><span>Up to 60%</span></div>
              <div className="destination-body">
                <small>Business / Round trip</small>
                <h3>{item.city}</h3>
                <p>Starting from per person</p>
                <div className="destination-footer"><strong>{item.price}</strong><a href="#contact">View <Icon name="arrow" size={14}/></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="deal-section">
        <div className="deal-card">
          <div className="deal-copy">
            <p className="kicker">LIMITED-TIME OFFERS</p>
            <h2>The Best Business Class Deals<br/>Worth Your Inbox</h2>
            <p>Unlock private fares unavailable online. Join our curated list for early access to the 40% off business class deals.</p>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
              <input type="email" required placeholder="Enter your email" aria-label="Email address"/>
              <button type="submit">{submitted ? 'You’re subscribed!' : 'Get fare alerts'}</button>
            </form>
          </div>
          <div className="phone-art"><img src={journeyImg} alt="Premium journey on a phone"/></div>
        </div>
      </section>

      <section className="support section" id="support">
        <div className="section-heading"><div><p className="kicker">Support at Every Stage</p><h2>How our experts fly with you</h2></div></div>
        <div className="support-grid">
          {[
            ['01','Explore Your Options','Compare premium fares tailored to your dates and destination.'],
            ['02','Confirm Your Journey','We finalize every detail and stay close before, during and after.'],
            ['03','Request a Consultation','Speak with a specialist before you commit.'],
            ['04','Travel with Assurance','Our experts support you through every change.'],
          ].map((item, i) => (
            <article className="support-card" key={item[0]}>
              <span className="step">{item[0]}</span>
              <h3>{item[1]}</h3><p>{item[2]}</p>
              {i === 0 && <img src={cabinImg} alt="Business class cabin"/>}
              {i === 3 && <img src={journeyImg} alt="Travel support"/>}
            </article>
          ))}
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="reviews-head">
          <p className="kicker">VERIFIED CUSTOMER REVIEWS</p>
          <h2>Trusted by Thousands of Business Class Travelers Worldwide</h2>
          <p>Our service is built on personal expertise and consistency.</p>
        </div>
        <div className="trust-summary">
          <div className="trust-brand"><strong>Trustpilot</strong><span className="stars">★ ★ ★ ★ ★</span><b>Excellent</b></div>
          <div className="rating"><strong>4.8</strong><span>Exceptional</span></div>
        </div>
        <div className="video-banner">
          <img src={cabinImg} alt="A traveler enjoying a premium cabin"/>
          <button aria-label="Play customer story">▶</button>
          <blockquote>“Our traveler saved <strong>$1,400</strong> and flew with a leading five-star airline.”</blockquote>
        </div>
        <div className="stats-grid">
          {[['$18.2B','Revenue handled','For premium travel booked worldwide'],['ABC Accredited','Accredited service','Verified travel professionals'],['100K+','Flights booked','Personalized itineraries delivered']].map((stat) => (
            <article key={stat[0]}><strong>{stat[0]}</strong><h3>{stat[1]}</h3><p>{stat[2]}</p></article>
          ))}
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-heading"><div><p className="kicker">QUESTIONS, ANSWERED</p><h2>Frequently Asked Questions</h2></div></div>
        <div className="faq-grid">
          {faqs.map(([question, answer], i) => (
            <article className={`faq-item ${openFaq === i ? 'open' : ''}`} key={question}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{question}</span><b>{openFaq === i ? '−' : '+'}</b></button>
              {openFaq === i && <p>{answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-heading"><div><p className="kicker">TALK TO A TRAVEL EXPERT</p><h2>Contact Us</h2></div></div>
        <div className="contact-grid">
          <article><span><Icon name="phone"/></span><h3>Call</h3><p>Speak with an expert for instant advice.</p><a href="tel:+18775550148">Call +1 877 555 0148</a></article>
          <article><span><Icon name="mail"/></span><h3>Send a message</h3><p>Share your route and preferred dates.</p><a href="mailto:hello@businessclass.com">hello@businessclass.com</a></article>
          <article><span><Icon name="calendar"/></span><h3>Schedule a consultation</h3><p>Book a convenient time with our team.</p><a href="#home">Request a call</a></article>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark"><Icon name="plane" size={17}/></span><span>BUSINESS CLASS</span></a><p>Premium travel, personally curated.</p></div>
          <div><h3>Information</h3><a href="#support">About us</a><a href="#faq">FAQs</a><a href="#contact">Contact</a></div>
          <div><h3>Company</h3><a href="#destinations">Destinations</a><a href="#reviews">Reviews</a><a href="#support">How it works</a></div>
          <div><h3>Policies</h3><a href="#faq">Privacy policy</a><a href="#faq">Terms of use</a><a href="#faq">Refund policy</a></div>
        </div>
        <div className="copyright">© 2026 Business Class. All rights reserved.</div>
      </footer>
    </main>
  )
}

export default App
