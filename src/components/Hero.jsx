import React from 'react'

function Hero() {
  return (
    <div>
     <section
  className="hero"
  id="home"
  aria-label="hero"
  style={{ backgroundImage: 'url("https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098734/Weave_Images/hero-bg_lotajd.jpg")' }}
>
  <div className="container">
    <div className="hero-content">
      <p className="section-subtitle">Start Preparing with US</p>
      <h2 className="h1 hero-title">Placement is all about Hardwork</h2>
      <p className="hero-text">
       Strive to become your best self - #TheSuperiorYou
      </p>
      <a href="#" className="btn btn-primary">
        <span className="span">Get Started Today</span>
        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
      </a>
    </div>
    <figure className="hero-banner">
      <img
        src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098739/Weave_Images/hero-banner_sto0l0.png"
        width={500}
        height={500}
        loading="lazy"
        alt="hero image"
        className="w-100"
      />
      <img
        src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098738/Weave_Images/hero-abs-1_f5mv1p.png"
        width={318}
        height={352}
        loading="lazy"
        aria-hidden="true"
        className="abs-img abs-img-1"
      />
      <img
        src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098738/Weave_Images/hero-abs-2_m7x1qv.png"
        width={160}
        height={160}
        loading="lazy"
        aria-hidden="true"
        className="abs-img abs-img-2"
      />
    </figure>
  </div>
</section>
 
    </div>
  )
}

export default Hero
