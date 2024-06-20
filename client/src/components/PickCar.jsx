import { Link } from "react-router-dom";

function PickCar() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Machine Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a wide range of machines for your next project.
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
              <Link to="/models">
              <button
                  className="colored-button"
                  onClick={() => {
                    scrollToTop();
                  }}
                >Explore Machines
              </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
