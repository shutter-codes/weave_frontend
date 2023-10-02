import React from 'react'

function CourseCategories() {
  return (
    <section className="section category" aria-label="category">
    <div className="container">
      <p className="section-subtitle">Course Categories</p>
      <h2 className="h2 section-title">Popular Topics To Learn</h2>
      <ul className="grid-list">
        <li>
          <div className="category-card">
            <div className="card-icon">
              <ion-icon name="briefcase-outline" />
            </div>
            <div>
              <h3 className="h3 card-title">
                <a href="#">Personal Development</a>
              </h3>
              <span className="card-meta">39 Course</span>
            </div>
          </div>
        </li>
        <li>
          <div className="category-card">
            <div className="card-icon">
              <ion-icon name="file-tray-full-outline" />
            </div>
            <div>
              <h3 className="h3 card-title">
                <a href="#">Human Research</a>
              </h3>
              <span className="card-meta">24 Course</span>
            </div>
          </div>
        </li>
        <li>
          <div className="category-card">
            <div className="card-icon">
              <ion-icon name="color-palette-outline" />
            </div>
            <div>
              <h3 className="h3 card-title">
                <a href="#">Art &amp; Design</a>
              </h3>
              <span className="card-meta">39 Course</span>
            </div>
          </div>
        </li>
        <li>
          <div className="category-card">
            <div className="card-icon">
              <ion-icon name="layers-outline" />
            </div>
            <div>
              <h3 className="h3 card-title">
                <a href="#">Business Management</a>
              </h3>
              <span className="card-meta">39 Course</span>
            </div>
          </div>
        </li>
        <li>
          <div className="category-card">
            <div className="card-icon">
              <ion-icon name="laptop-outline" />
            </div>
            <div>
              <h3 className="h3 card-title">
                <a href="#">Web Development</a>
              </h3>
              <span className="card-meta">39 Course</span>
            </div>
          </div>
        </li>
        <li>
          <div className="category-card">
            <div className="card-icon">
              <ion-icon name="thumbs-up-outline" />
            </div>
            <div>
              <h3 className="h3 card-title">
                <a href="#">Lifestyle</a>
              </h3>
              <span className="card-meta">39 Course</span>
            </div>
          </div>
        </li>
        <li>
         
        </li>
      </ul>
    </div>
  </section>
  
  )
}

export default CourseCategories
