import React from "react";
import '../../assets/Styles/courseCards.css'
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="flex gap-10 w-[100%] ">
      <section className="courses-cards-wrap">
        <div className="loadingspinner loading-indicator"></div>
        <section className="cardCourses page">
          <Link
            to="/courses/courses-details/Mastering the Art of Resume"
            className="card"
          >
            <div>
              <div>
                <img
                  src="https://ik.imagekit.io/sheryians/courses_gif/Mastering_the_Art_of_Resume-RESUMECOURSEPOSTER_NK6hP8IP8.jpg"
                  alt="course image"
                />
              </div>
              <div className="body">
                <div className="heading">
                  <p>Mastering the Art of Resume</p>
                </div>

                <div className="tags">
                  <div className="tag">Personality Grooming</div>

                  <div className="tag">Designing</div>
                </div>
              </div>
            </div>
            <div>
              <div className="instructor">
                <p>Instructor</p>
                <h1>Harsh Sharma</h1>
              </div>
              <div className="price">
                <p>Price Value</p>
                <h1>₹ 1</h1>
              </div>
            </div>
            <div className="courseTags">
              <div class="tag">INDEPTH</div>
            </div>
          </Link>
        </section>
      </section>
              
    </div>
  );
}

export default Cards;
