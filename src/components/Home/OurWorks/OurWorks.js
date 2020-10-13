import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import Carousel1 from './../../../images/carousel-1.png';
import Carousel2 from './../../../images/carousel-2.png';
import Carousel3 from './../../../images/carousel-3.png';
import CarouselComponents from '../CarouselComponents/CarouselComponents';
import Carousel from 'react-elastic-carousel';
const OurWorks = () => {
    const cardImages = [
        {
            id: 1,
            image: Carousel1
        },
        {
            id: 2,
            image: Carousel2
        },
        {
            id: 3,
            image: Carousel3
        },
    ]
    return (
        <section className="works py-5">
            <div className="container ">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h2 className="text-white mb-5">Here are our <span >Services</span> </h2>
                        <Carousel itemsToShow={1} infiniteLoop>

                            {
                                cardImages.map(item => <CarouselComponents key={item.id} item={item}></CarouselComponents>)
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorks;