"use client";
import { useDispatch } from "react-redux";
import Price from "./Price";
import { addToCart } from "@/redux/asagoSlice";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import Image from "next/image";

const ProudctInfo = ({ product }) => {

    const dispatch = useDispatch()
    product.images = ["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageChange = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="container mx-auto p-6 flex w-full space-x-6">
            <div className="flex flex-col gap-4 h-full">
                <div className="relative ">
                    <Image
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        className="w-full h-auto rounded-lg shadow-md object-cover mb-6 md:mb-0"
                        width={300}
                        height={300}
                        priority
                    />
                </div>
                <div className="flex flex-col justify-center md:flex-none ml-4">
                    {product.images.length > 1 && (
                        <div className="flex items-center space-x-4 overflow-x-auto max-w-full ">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleImageChange(index)}
                                    className={`h-16 w-16 rounded-md overflow-hidden focus:outline-none ${currentImageIndex === index ? 'border-4 border-blue-500' : 'border border-gray-300'}`}
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.name} - Image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        width={100}
                                        height={100}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-5 w-full">
                <h2 className="text-4xl font-semibold">{product?.title}</h2>
                <div className="flex items-center gap-4">
                    <p className="text-lg font-normal text-gray-500 line-through">
                        <Price amount={product?.rowprice} />
                    </p>

                    <Price amount={product?.price} className="text-lg font-bold" />

                    <p className="text-sm">
                        you saved{" "}
                        <Price
                            className="bg-green-700 text-white px-2 rounded-md"
                            amount={product?.rowprice - product?.price}
                        />{" "}
                        from this item
                    </p>
                </div>
                <p className="text-sm tracking-wide text-gray-600">
                    {product?.description}
                </p>
                <p className="text-sm text-gray-500">Be the first to leave a review.</p>
                <button
                    onClick={() => { dispatch(addToCart(product)); toast.success(`${product?.title.substring(0, 12)}... added to cart`) }}
                    className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg rounded-md">
                    Add to Cart
                </button>
                <p className="font-normal text-sm">
                    <span className="text-base font-medium">Categories:</span> Spring
                    collection, Streetwear, Women Tags: featured SKU: N/A
                </p>
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            background: "#000",
                            color: "#fff",
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default ProudctInfo;
