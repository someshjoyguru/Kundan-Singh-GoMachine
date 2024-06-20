import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import jcb from "../images/banners/bg-1.png";

import { Link } from "react-router-dom";
import { BookBanner } from "../components/BookBanner";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">


            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={jcb} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Site Mini Dumper</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    {/* <div className="models-div__box__descr__name-price__price">
                      <h4>2 Ton</h4>
                      <p>capacity</p>
                    </div> */}
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Capacity
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 TON &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Lift Type
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Front-end Hydralic &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Model
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2022/ABC &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>


                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Max Speed
                    </span>
                    <span style={{ textAlign: "right" }}>
                      20kmph &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Power
                    </span>
                    <span style={{ textAlign: "right" }}>
                      47HP &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Location
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Noida &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Rent Machine
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={jcb} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Site Mini Dumper</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    {/* <div className="models-div__box__descr__name-price__price">
                      <h4>2 Ton</h4>
                      <p>capacity</p>
                    </div> */}
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Capacity
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 TON &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Lift Type
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Front-end Hydralic &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Model
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2022/ABC &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>


                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Max Speed
                    </span>
                    <span style={{ textAlign: "right" }}>
                      20kmph &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Power
                    </span>
                    <span style={{ textAlign: "right" }}>
                      47HP &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Location
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Noida &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Rent Machine
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={jcb} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Site Mini Dumper</p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    {/* <div className="models-div__box__descr__name-price__price">
                      <h4>2 Ton</h4>
                      <p>capacity</p>
                    </div> */}
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Capacity
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2 TON &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Lift Type
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Front-end Hydralic &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Model
                    </span>
                    <span style={{ textAlign: "right" }}>
                      2022/ABC &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>


                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Max Speed
                    </span>
                    <span style={{ textAlign: "right" }}>
                      20kmph &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Power
                    </span>
                    <span style={{ textAlign: "right" }}>
                      47HP &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                    <span>
                      <i className="fa-solid fa-car-side"></i> &nbsp; Location
                    </span>
                    <span style={{ textAlign: "right" }}>
                      Noida &nbsp; <i className="fa-solid fa-car-side"></i>
                    </span>

                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Rent Machine
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <BookBanner />
        <Footer />
      </section>
    </>
  );
}

export default Models;
