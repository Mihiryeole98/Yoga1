import React from 'react';
import { Carousel } from 'react-materialize';


const MyCarousel = () => {
    return ( 
        <Carousel
            carouselId="Carousel-2"
            className="white-text center"
            options={{
                fullWidth: true,
                indicators: true,
				dist: 50
            }}
            >
            <div className="black">
                <h2>
                First Panel
                </h2>
                <p>
                This is your first panel
                </p>
            </div>
            <div className="amber">
                <h2>
                Second Panel
                </h2>
                <p>
                This is your second panel
                </p>
            </div>
            <div className="green">
                <h2>Third Panel</h2>
                <p>This is your third panel</p>
            </div>
            <div className="blue">
                <h2>
                Fourth Panel
                </h2>
                <p>
                This is your fourth panel
                </p>
            </div>
        </Carousel>
     );
}
 
export default MyCarousel;