import React from "react";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import PopularCourses from "../components/PopularCourses";

function HomePage() {
  return (
    <div>
      <Nav />
      <Hero />
      <PopularCourses />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
