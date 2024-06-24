import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SearchBox from './SearchBox';


const CustomCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel
                showArrows={true}
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
            >
                <div className="carousel-slide">
                <div className="carousel-overlay"></div>
                    <div className="carousel-content">
                        <h2>GOMACHINE®</h2>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2018/05/18/22/33/construction-machine-3412240_1280.jpg" alt="Slide 1" />
                </div>
                <div className="carousel-slide">
                <div className="carousel-overlay"></div>
                    <div className="carousel-content">
                        <h2>GOMACHINE®</h2>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2018/05/18/22/33/construction-machine-3412240_1280.jpg" alt="Slide 2" />
                </div>
                <div className="carousel-slide">
                <div className="carousel-overlay"></div>
                    <div className="carousel-content">
                        <h2>GOMACHINE®</h2>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2018/05/18/22/33/construction-machine-3412240_1280.jpg" alt="Slide 3" />
                </div>
            </Carousel>
            <div className="search-container ">
                {/* <input type="text" className="search-input" placeholder="Search..." />
                <button className="search-button">Search</button> */}
                <SearchBox />
            </div>
        </div>
    );
};

export default CustomCarousel;
