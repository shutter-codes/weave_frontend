import React from 'react'

function ClubEvents() {
  return (
    <section className="section event" id="event" aria-label="event">
    <div className="container">
      <p className="section-subtitle">Upcomming Event</p>
      <h2 className="h2 section-title">Let’s Join Our Community</h2>
      <ul className="grid-list">
        <li>
          <div className="event-card">
            <figure className="card-banner">
              <img
                src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098737/Weave_Images/event-1_zf463t.jpg"
                width={370}
                height={250}
                loading="lazy"
                alt="Innovation & Technological Entrepreneurship Team"
                className="img-cover"
              />
            </figure>
            <time className="badge" dateTime="2022-12-04">
              04 Dec 2022
            </time>
            <div className="card-content">
              <address className="card-address">
                <ion-icon name="location-outline" aria-hidden="true" />
                <span className="span">Alpaca Way Anaheim, CA 92805</span>
              </address>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Innovation &amp; Technological Entrepreneurship Team
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Get Ticket</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="event-card">
            <figure className="card-banner">
              <img
                src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098737/Weave_Images/event-2_b0nujl.jpg"
                width={370}
                height={250}
                loading="lazy"
                alt="Virtual Spring Part-time Jobs Fair for Student"
                className="img-cover"
              />
            </figure>
            <time className="badge" dateTime="2022-10-30">
              30th Oct 2022
            </time>
            <div className="card-content">
              <address className="card-address">
                <ion-icon name="location-outline" aria-hidden="true" />
                <span className="span">Ritter Avenue Detroit, MI 48226</span>
              </address>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Virtual Spring Part-time Jobs Fair for Student
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Get Ticket</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="event-card">
            <figure className="card-banner">
              <img
                src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098738/Weave_Images/event-3_n02tio.jpg"
                width={370}
                height={250}
                loading="lazy"
                alt="Explorations of Regional Chief Executive Network"
                className="img-cover"
              />
            </figure>
            <time className="badge" dateTime="2022-09-18">
              18th Sep 2022
            </time>
            <div className="card-content">
              <address className="card-address">
                <ion-icon name="location-outline" aria-hidden="true" />
                <span className="span">Stout Street York, PA 17401</span>
              </address>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Explorations of Regional Chief Executive Network
                </a>
              </h3>
              <a href="#" className="btn-link">
                <span className="span">Get Ticket</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
  
  )
}

export default ClubEvents
