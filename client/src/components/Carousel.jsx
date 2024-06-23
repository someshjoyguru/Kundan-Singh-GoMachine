import React from 'react';

const Carousel = () => {
    return (
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10" style={{ textAlign: 'center' }}>
                                        <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                                            Welcome to Balaji Krishna Engitech
                                        </h5>
                                        <h2 className="py-1 px-5 text-light">We are hiring!</h2>
                                        <a href="careers.html" className="btn btn-primary py-3 px-5 mb-5">
                                            CLICK HERE
                                        </a>
                                        <h1 className="display-2 text-light mb-3 animated slideInDown">
                                            Ensuring Quality Castings
                                        </h1>
                                        <a href="contact.html" className="btn btn-primary py-3 px-5">
                                            Request a Quote <i className="fa-solid fa-phone ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-10" style={{ textAlign: 'center' }}>
                                        <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                                            Welcome to Balaji Krishna Engitech
                                        </h5>
                                        <h1 className="display-2 text-light mb-3 animated slideInDown carousel-2">
                                            "Innovation is not always about doing different things, it also encompasses doing things differently"
                                        </h1>
                                        <a href="downloads/Balaji Krishna Engitech Brochure.pdf" download="Balaji Krishna Engitech Brochure" className="btn btn-primary py-3 px-5">
                                            Download Brochure <i className="fa-solid fa-download ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

const ClientSlider = () => {
    return (
        <div className="client-slider">
            <div className="client-slide-track">
                {/* Add your client slides here */}
                <div className="client-slide">
                    <img className="client-img" src="img/client-logo-1.png" alt="Client Logo 1" />
                </div>
                {/* Repeat for other client slides */}
            </div>
        </div>
    );
};

export { Carousel, ClientSlider };
