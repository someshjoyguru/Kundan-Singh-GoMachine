import React from 'react';

const RentalExperience = () => {
  return (
    <div className="rental-experience">
      <h2 className="rental-experience-title">Own Less, Create More - the Power of Rental</h2>
      <div className="rental-experience-features">
        <div className="rental-experience-feature">
          <i className="fa-solid fa-lightbulb rental-experience-icon fa-xl"></i>
          <p>A team of rental experts guiding you to thoughtful solutions</p>
        </div>
        <div className="rental-experience-feature">
          <i className="fa-solid fa-shield-halved rental-experience-icon fa-xl"></i>
          <p>We put safety first, enabling you to protect your team</p>
        </div>
        <div className="rental-experience-feature">
          <i className="fa-solid fa-wrench rental-experience-icon fa-xl"></i>
          <p>Empowering your projects with innovative tools and equipment</p>
        </div>
      </div>
    </div>
  );
};

export default RentalExperience;
