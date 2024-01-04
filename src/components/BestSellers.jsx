import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";

const BestSellers = ({ products, title }) => {
    return (
        <Container className="w-full pb-20">
            <Heading heading={title} />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products?.map((item) => (
                    <Product key={item?._id} product={item} bg="#ffffff" />
                ))}
            </div>
        </Container>
    );
};

export default BestSellers;
