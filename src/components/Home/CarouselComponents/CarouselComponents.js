import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


const CarouselComponents = ({item}) => {
    
    return (
        <div className="carouselCard">
        <img src={item.image} className="img-fluid w-100" alt=""/>
        </div>
       
    );
        
};

export default CarouselComponents;