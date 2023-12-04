import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[100px]  ">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={70}
                className="productCarousel"
            >
                {images?.data?.map((img) => (
                    <img
                        key={img.id}
                        src={`https://server-qyse.onrender.com${img?.attributes?.url}`}
                        alt={img}
                        
                    />
                ))}
                
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;
