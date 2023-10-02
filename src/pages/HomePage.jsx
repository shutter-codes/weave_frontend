import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import PopularCourses from "../components/PopularCourses";
import CourseCategories from "../components/CourseCategories";
import ClubEvents from "../components/ClubEvents";

function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <CourseCategories/>
      <PopularCourses />
      <ClubEvents/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
