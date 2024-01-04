"use client";
import Container from "./Container";
import Slider from "react-slick";
import Product from "./Product";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const NewArrival = ({ products }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <Container className="-mt-40">
            <div>
                <Slider {...settings}>
                    {products?.map((item) => (
                        <div key={item?._id} className="px-2">
                            <Product product={item} />
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    );
};

export default NewArrival;
