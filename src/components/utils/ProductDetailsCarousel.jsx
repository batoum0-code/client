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
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.data?.map((img) => (
                    <img
                        key={img.id}
                        src={`http://localhost:1337${img?.attributes?.url}`}
                        alt={img}
                        
                    />
                ))}
                {/* <img src="/p2.png" />
                <img src="/p3.png" />
                <img src="/p4.png" />
                <img src="/p5.png" />
                <img src="/p6.png" />
                <img src="/p7.png" /> */}
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;
