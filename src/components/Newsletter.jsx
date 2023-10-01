import React from 'react'

function Newsletter() {
  return (
    <section
    className="section newsletter"
    aria-label="newsletter"
    style={{ backgroundImage: 'url("https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098734/Weave_Images/newsletter-bg_uakwav.jpg")' }}
  >
    <div className="container">
      <p className="section-subtitle">Subscribe Newsletter</p>
      <h2 className="h2 section-title">Get Every Latest News</h2>
      <form action="" className="newsletter-form">
        <div className="input-wrapper">
          <input
            type="email"
            name="email_address"
            aria-label="email"
            placeholder="Enter your mail address"
            required=""
            className="email-field"
          />
          <ion-icon name="mail-open-outline" aria-hidden="true" />
        </div>
        <button type="submit" className="btn btn-primary">
          <span className="span">Subscribe</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true" />
        </button>
      </form>
    </div>
  </section>
  
  )
}

export default Newsletter
