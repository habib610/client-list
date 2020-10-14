import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import CarouselComponents from '../CarouselComponents/CarouselComponents';
import Carousel from 'react-elastic-carousel';
const OurWorks = () => {
    const cardImages = [
        {
            id: 1,
            image: "https://iili.io/2tmhrP.md.png"
        },
        {
            id: 2,
            image: "https://iili.io/2tmw21.md.png"
        },
        {
            id: 3,
            image:"https://iili.io/2tmvTJ.md.png"
        },
        {
            id: 4,
            image: "https://iili.io/2tmNYF.md.png"
        },
        {
            id: 5,
            image: "https://iili.io/2DCTqF.md.png"
        },
        {
            id: 6,
            image: "https://iili.io/2tmw21.md.png"
        },
    ]
    return (
        <section className="works py-5">
            <div className="container ">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <h2 className="text-white mb-5">Here are our <span >Services</span> </h2>
                        <Carousel   itemsToShow={3} enableAutoPlay={true} >

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