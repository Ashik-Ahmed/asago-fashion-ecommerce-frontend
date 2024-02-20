"use client";

import Link from "next/link";
import Image from "next/image";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/asagoSlice";
import toast, { Toaster } from "react-hot-toast";
import { FaShippingFast } from "react-icons/fa";


const Product = ({ product, bg }) => {

    const dispatch = useDispatch()

    return (
        <div className="w-full relative group border-[1px] border-black hover:shadow-lg duration-200 shadow-gray-500 rounded-md overflow-hidden group">
            <div className="w-full h-80 flex items-center justify-center bg-white overflow-hidden">
                <div className={`relative ${bg}`}>
                    <Link href={`/product/${product?.slug}`}>
                        <Image
                            src={product?.imageLink}
                            alt="product image"
                            width={700}
                            height={700}
                            className="w-72 h-72 object-contain"
                        />
                    </Link>
                    <div className="abosute bottom-0 flex items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300">
                        <button
                            onClick={() => { dispatch(addToCart(product)); toast.success(`${product?.title.substring(0, 12)}... added to cart`) }}
                            className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
                        >
                            <span>
                                <AiOutlineShopping />
                            </span>
                            Add to bag
                        </button>
                        <Link
                            href={`/product/${product?.slug}`}
                            className="bg-gray-800 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-gray-950 hover:text-white duration-200"
                        >
                            <span>
                                <BsArrowsFullscreen />
                            </span>
                            Quick view
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <div>
                            {product?.isNew && (
                                <div className="absolute top-2 left-2 z-49">
                                    <p className="bg-red-500 px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:shadow-lg duration-300 cursor-pointer rounded-md">
                                        New
                                    </p>
                                </div>
                            )}
                            <div>
                            </div>
                            {product?.isFreeShipping && (
                                <div className="absolute top-2 right-2 z-49">
                                    <div className="bg-yellow-500 px-4 py-1 space-x-2 text-white flex justify-center items-center text-sm font-semibold  hover:shadow-lg duration-300 cursor-pointer rounded-md">
                                        <FaShippingFast size={20} color="#222" />
                                        <p>Free Shipping</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-80 py-6 flex flex-col gap-1 px-4">
                <div className="flex items-center justify-between">
                    <Link href={`/product/${product?.slug}`} className="text-lg text-primeColor font-bold">
                        {product?.title.substring(0, 15)}
                    </Link>
                    <div className="flex items-center gap-2">
                        <p className="text-[#767676] text-xs line-through">
                            ${product?.rowprice}
                        </p>
                        <p className="font-semibold">${product?.price}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-[#767676] text-sm">
                        a product by{" "}
                        <span className="font-semibold text-primeColor">
                            {product?.brand}
                        </span>
                    </p>
                    <div className="flex items-center gap-1">
                        <MdOutlineStarPurple500 className="text-lg text-yellow-500" />
                        <span className="font-medium text-sm">{product?.ratings}</span>
                    </div>
                </div>
            </div>
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
    );
};

export default Product;
