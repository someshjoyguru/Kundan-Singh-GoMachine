import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>EQUIPMENT</h3>
              <h2>Quality equipment, ready to go</h2>
            </div>

            {/* <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>What We Do</h3>
                <p>
                GoMachine® is a platform for renting machines, connecting users with a network of suppliers who offer their machines for rent through GoMachine®. The company itself does not own any machines.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>How We Do</h3>
                <p>
                GoMachine® simplifies the process of requesting quotes and scheduling rentals. The machines listed on the website are updated based on supplier availability and can be rented or leased immediately upon request.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Support we provide</h3>
                <p>
                Once your rental is secured, GoMachine® manages the scheduling, billing, logistics, documentation, and ensures quality management for all machines within our supplier network. Delivery, technical support, and additional services are provided by our suppliers as needed.
                </p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
