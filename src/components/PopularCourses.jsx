import React from 'react'

function PopularCourses() {
  return (
    <section
    className="section course"
    id="courses"
    aria-label="course"
    style={{ backgroundImage: 'url("https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098738/Weave_Images/course-bg_amju7i.jpg")' }}
  >
    <div className="container">
      <p className="section-subtitle">Popular Courses</p>
      <h2 className="h2 section-title">Our Popular Courses</h2>
      <ul className="grid-list">
        <li>
          <div className="course-card">
            <figure className="card-banner">
              <img
                src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098734/Weave_Images/course-1_sfrxir.jpg"
                width={370}
                height={270}
                loading="lazy"
                alt="Competitive Strategy law for all students"
                className="img-cover"
              />
            </figure>
            <div className="card-actions">
              <span className="badge">Intermediate</span>
              <button
                className="whishlist-btn"
                aria-label="Add to whishlist"
                data-whish-btn=""
              >
                <ion-icon name="heart" />
              </button>
            </div>
            <div className="card-content">
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon name="reader-outline" aria-hidden="true" />
                  <span className="card-meta-text">35 Lessons</span>
                </li>
                <li className="card-meta-item">
                  <ion-icon name="time-outline" aria-hidden="true" />
                  <time dateTime="PT18H15M44S" className="card-meta-text">
                    18h 15m 44s
                  </time>
                </li>
              </ul>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Competitive Strategy law for all students
                </a>
              </h3>
              <div className="rating-wrapper">
                <div className="rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <span className="rating-text">(18 Review)</span>
              </div>
              <div className="card-footer">
                <div className="card-price">
                  <span className="span">$29.00</span>
                  <del className="del">$39.00</del>
                </div>
                <div className="card-meta-item">
                  <ion-icon name="people-outline" aria-hidden="true" />
                  <span className="card-meta-text">47 Students</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="course-card">
            <figure className="card-banner">
              <img
                src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098735/Weave_Images/course-2_fbojhm.jpg"
                width={370}
                height={270}
                loading="lazy"
                alt="Machine Learning A-Z: Hands-On Python and java"
                className="img-cover"
              />
            </figure>
            <div className="card-actions">
              <span className="badge">Advanced</span>
              <button
                className="whishlist-btn"
                aria-label="Add to whishlist"
                data-whish-btn=""
              >
                <ion-icon name="heart" />
              </button>
            </div>
            <div className="card-content">
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon name="reader-outline" aria-hidden="true" />
                  <span className="card-meta-text">48 Lessons</span>
                </li>
                <li className="card-meta-item">
                  <ion-icon name="time-outline" aria-hidden="true" />
                  <time dateTime="PT18H15M44S" className="card-meta-text">
                    18h 15m 44s
                  </time>
                </li>
              </ul>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Machine Learning A-Z: Hands-On Python and java
                </a>
              </h3>
              <div className="rating-wrapper">
                <div className="rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <span className="rating-text">(18 Review)</span>
              </div>
              <div className="card-footer">
                <div className="card-price">
                  <span className="span">Free</span>
                </div>
                <div className="card-meta-item">
                  <ion-icon name="people-outline" aria-hidden="true" />
                  <span className="card-meta-text">65 Students</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="course-card">
            <figure className="card-banner">
              <img
                src="https://res.cloudinary.com/dctlzmkwh/image/upload/v1696098735/Weave_Images/course-3_zsc68r.jpg"
                width={370}
                height={270}
                loading="lazy"
                alt="Achieving Advanced in Insights with Big"
                className="img-cover"
              />
            </figure>
            <div className="card-actions">
              <span className="badge">Basic</span>
              <button
                className="whishlist-btn"
                aria-label="Add to whishlist"
                data-whish-btn=""
              >
                <ion-icon name="heart" />
              </button>
            </div>
            <div className="card-content">
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon name="reader-outline" aria-hidden="true" />
                  <span className="card-meta-text">80 Lessons</span>
                </li>
                <li className="card-meta-item">
                  <ion-icon name="time-outline" aria-hidden="true" />
                  <time dateTime="PT18H15M44S" className="card-meta-text">
                    18h 15m 44s
                  </time>
                </li>
              </ul>
              <h3 className="h3">
                <a href="#" className="card-title">
                  Achieving Advanced in Insights with Big
                </a>
              </h3>
              <div className="rating-wrapper">
                <div className="rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
                <span className="rating-text">(18 Review)</span>
              </div>
              <div className="card-footer">
                <div className="card-price">
                  <span className="span">$59.00</span>
                  <del className="del">$69.00</del>
                </div>
                <div className="card-meta-item">
                  <ion-icon name="people-outline" aria-hidden="true" />
                  <span className="card-meta-text">42 Students</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
    
        </li>
      </ul>
      <a href="#" className="btn btn-primary">
        <span className="span">View All Courses</span>
        <ion-icon name="arrow-forward-outline" aria-hidden="true" />
      </a>
    </div>
  </section>
  
  )
}

export default PopularCourses
