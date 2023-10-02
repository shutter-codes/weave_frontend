import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="logo">
           Weave
          </a>
          <p className="section-text">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum.
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin" />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-pinterest" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Explore</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">About Us</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">Upcoming Events</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">Blog &amp; News</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">FAQ Question</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">Testimonial</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">Privacy Policy</span>
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Useful Links</p>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">Contact Us</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">Pricing Plan</span>
            </a>
          </li>
          
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">FAQ</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">Popular Courses</span>
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              <ion-icon name="chevron-forward" aria-hidden="true" />
              <span className="span">Terms &amp; Conditions</span>
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Contact Info</p>
          </li>
          <li className="footer-item">
            <ion-icon name="location-outline" aria-hidden="true" />
            <address className="footer-link">
             Arya College of Engineering and IT
            </address>
          </li>
          <li className="footer-item">
            <ion-icon name="call" aria-hidden="true" />
            <a href="tel:+91" className="footer-link">
             +91 7003278402
            </a>
          </li>
        
          <li className="footer-item">
            <ion-icon name="mail-outline" aria-hidden="true" />
            <a href="mailto:contact@eduhome.com" className="footer-link">
              contact@weave.com
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          Copyright 2023 Weave. All Rights Reserved by{" "}
          <a href="#" className="copyright-link">
           WhyNaitik
          </a>
        </p>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
