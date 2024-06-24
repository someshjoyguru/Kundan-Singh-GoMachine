import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../images/hero/heroes-bg.png"; // Ensure this path is correct

const cardData = [
  {
    title: "Portable Gas Generators",
    category: "Power Generation Equipment",
    image: img, // Corrected image path
  },
  {
    title: "One-Person Lifts",
    category: "Aerial Work Platforms",
    image: img,
  },
  {
    title: "Towable Light Towers",
    category: "Lighting Equipment",
    image: img,
  },
  {
    title: "Heaters",
    category: "HVAC Equipment",
    image: img,
  },
  {
    title: "Portable Gas Generators",
    category: "Power Generation Equipment",
    image: img, // Corrected image path
  },
  {
    title: "One-Person Lifts",
    category: "Aerial Work Platforms",
    image: img,
  },
  {
    title: "Towable Light Towers",
    category: "Lighting Equipment",
    image: img,
  },
  {
    title: "Heaters",
    category: "HVAC Equipment",
    image: img,
  },
  {
    title: "Portable Gas Generators",
    category: "Power Generation Equipment",
    image: img, // Corrected image path
  },
  {
    title: "One-Person Lifts",
    category: "Aerial Work Platforms",
    image: img,
  },
  {
    title: "Towable Light Towers",
    category: "Lighting Equipment",
    image: img,
  },
  {
    title: "Heaters",
    category: "HVAC Equipment",
    image: img,
  },
  {
    title: "Portable Gas Generators",
    category: "Power Generation Equipment",
    image: img, // Corrected image path
  },
  {
    title: "One-Person Lifts",
    category: "Aerial Work Platforms",
    image: img,
  },
  {
    title: "Towable Light Towers",
    category: "Lighting Equipment",
    image: img,
  },
  {
    title: "Heaters",
    category: "HVAC Equipment",
    image: img,
  }
];

const categories = [
  "All",
  "Power Generation Equipment",
  "Aerial Work Platforms",
  "Lighting Equipment",
  "HVAC Equipment",
];

function MachineGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const filteredData = selectedCategory === "All"
    ? cardData
    : cardData.filter(card => card.category === selectedCategory);

  return (
    <div>
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="machine-carousel-container">
        <Slider {...settings}>
          {filteredData.map((card, index) => (
            <div key={index} className="machine-card">
              <img src={card.image} alt={card.title} className="machine-card-image" />
              <div className="machine-card-content">
                <h4 className="machine-card-category">{card.category}</h4>
                <h3 className="machine-card-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MachineGrid;
