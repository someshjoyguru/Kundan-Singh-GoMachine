import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import { useEffect, useState } from "react";
import { Carousel, ClientSlider} from "./Carousel";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="home" className="hero-section">
        {/* <div className="container"> */}
          {/* <img className="bg-shape" src={BgShape} alt="bg-shape" /> */}
          {/* <div className="hero-content"> */}
            {/* <div className="hero-content__text"> */}
              {/* <h4>Rent your machine now</h4>
              <h1>
                Save <span>big</span> with our machine rental
              </h1>
              <p>
                <b>Submit one request, get multiple quotes</b><br />
Rent Excavators, Bulldozers, Cranes & Rollers from GOMACHINE®.<br />
You can hire the machines you need for a few months to a few years with flexible hire arrangements. Share your requirements with us.
              </p> */}
              {/* <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-machine"
                  to="/"
                >
                  Rent a machine &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  Be a supplier &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div> */}
            {/* </div> */}

            
          {/* </div> */}
          {/* <div className="hero-content">
          <div className="hero-content__text__btns">
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-machine"
                  to="/"
                >
                  Rent a machine &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  Be a supplier &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
          </div> */}
        {/* </div> */}
        {/* <Carousel />
        <ClientSlider /> */}
        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
      
    </>
  );
}

export default Hero;
