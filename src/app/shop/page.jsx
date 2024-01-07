"use client";
import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import Product from "@/components/Product";
import ListProduct from "@/components/ListProduct";

const ShopPage = () => {
    const [showGrid, setShowGrid] = useState(true);
    const [showList, setShowList] = useState(false);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        setProductData([
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-1",
                "isNew": true,
                "title": "Product 1",
                "rowprice": 125,
                "price": 99.99,
                "brand": "Brand A",
                "ratings": 4.5
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-2",
                "isNew": false,
                "title": "Product 2",
                "rowprice": 150,
                "price": 129.99,
                "brand": "Brand B",
                "ratings": 4.8
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-3",
                "isNew": true,
                "title": "Product 3",
                "rowprice": 99,
                "price": 79.99,
                "brand": "Brand C",
                "ratings": 3.9
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-4",
                "isNew": false,
                "title": "Product 4",
                "rowprice": 225,
                "price": 199.99,
                "brand": "Brand A",
                "ratings": 4.2
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-5",
                "isNew": true,
                "title": "Product 5",
                "rowprice": 175,
                "price": 149.99,
                "brand": "Brand B",
                "ratings": 5
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-6",
                "isNew": false,
                "title": "Product 6",
                "rowprice": 85,
                "price": 69.99,
                "brand": "Brand C",
                "ratings": 3.5
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-7",
                "isNew": true,
                "title": "Product 7",
                "rowprice": 110,
                "price": 89.99,
                "brand": "Brand A",
                "ratings": 4.1
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-8",
                "isNew": false,
                "title": "Product 8",
                "rowprice": 140,
                "price": 119.99,
                "brand": "Brand B",
                "ratings": 4.7
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-9",
                "isNew": true,
                "title": "Product 9",
                "rowprice": 95,
                "price": 74.99,
                "brand": "Brand C",
                "ratings": 3.8
            },
            {
                "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
                "slug": "product-slug-10",
                "isNew": false,
                "title": "Product 10",
                "rowprice": 200,
                "price": 179.99,
                "brand": "Brand A",
                "ratings": 4.6
            }
        ])
    }, []);

    return (
        <Container>
            <div className="flex items-center justify-between pb-10">
                <h2 className="text-2xl text-primeColor font-bold">All Proudcts</h2>
                <div className="flex items-center gap-4">
                    <span
                        onClick={() => {
                            setShowGrid(true);
                            setShowList(false);
                        }}
                        className={`${showGrid
                            ? "bg-primeColor text-white"
                            : "border-[1px] border-gray-300 text-[#737373]"
                            } w-8 h-8 text-lg flex items-center justify-center cursor-pointer`}
                    >
                        <BsGridFill />
                    </span>
                    <span
                        onClick={() => {
                            setShowGrid(false);
                            setShowList(true);
                        }}
                        className={`${showList
                            ? "bg-primeColor text-white"
                            : "border-[1px] border-gray-300 text-[#737373]"
                            } w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
                    >
                        <ImList />
                    </span>
                </div>
            </div>
            {showGrid ? (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {productData?.map((item) => (
                        <Product key={item?._id} product={item} />
                    ))}
                </div>
            ) : (
                <div className="w-full grid grid-cols-1 gap-5">
                    {productData?.map((item) => (
                        <ListProduct key={item?._id} product={item} />
                    ))}
                </div>
            )}
        </Container>
    );
};

export default ShopPage;
