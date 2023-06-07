import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
const CarouselComponent = () => {
    const adv = [
        './assets/img/adv_1.png',
        './assets/img/adv_2.png',
        './assets/img/adv_3.png',
      ]

    return (
        <div className='main__carousel'>
            <Carousel 
                infiniteLoop
                centerMode
                emulateTouch
                autoPlay
                interval={5000}
                showThumbs= {false}
                dynamicHeight
                centerSlidePercentage={85}
                className='main-slide'>
                
                { 
                    adv.map((item, index)=>(
                        <div className='carousel__pic'>
                            <img className='carousel__pic-img'
                                src={item}
                                alt={`adv ${index + 1}`}
                            />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default CarouselComponent;