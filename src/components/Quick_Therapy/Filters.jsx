import React from "react";
import '../../assets/Styles/filters.css'
function Filters() {
  return (
    <div className=" mt-[12rem] mb-[5rem]">
      <section id="page1" class="page">
        <div className="filters">
          <div className="left">
            <div className="sort-container">
              <label for="sortSelect">Sort by:</label>
              <select id="sortSelect">
                <option value="popular">
                  {" "}
                  <span>Most Popular</span>{" "}
                </option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          <div className="right">
            <button className="filter" data-tag="all">
              All courses
            </button>
            <button className="filter " data-tag="front-end">
              Front-end
            </button>
            <button className="filter " data-tag="back-end">
              Back-end
            </button>
            <button className="filter " data-tag="react">
              React
            </button>
            <button className="filter " data-tag="ui-ux">
              UI/UX
            </button>
            <button className="filter" data-tag="3d">
              3D
            </button>
            <button className="filter" data-tag="others">
              Others
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Filters;
