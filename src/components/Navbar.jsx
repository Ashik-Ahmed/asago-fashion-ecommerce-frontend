"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.jpeg";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");
    const [sidenav, setSidenav] = useState(false);
    const [category, setCategory] = useState(false);
    const [brand, setBrand] = useState(false);

    const navBarList = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Category",
            link: "/category",
        },
        {
            title: "Shop",
            link: "/shop",
        },
        {
            title: "Cart",
            link: "/cart",
        },
        {
            title: "Profile",
            link: "/profile",
        },
    ];
    return (
        <div className="w-full h-20 bg-sky-400 border-b-[1px] border-b-gray-400 sticky top-0 z-50">
            <nav className="h-full max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between gap-2">
                <Link href={"/"}>
                    <Image src={logo} alt="logo" className="w-32" />
                </Link>
                {/* <div className="relative w-full hidden lg:inline-flex lg:w-[600px] h-10 text-base text-primeColor border-[1px] border-black items-center gap-2 justify-between px-6 rounded-md">
                    <input
                        type="text"
                        placeholder="Search your products here"
                        className="flex-1 h-full outline-none bg-transparent placeholder:text-gray-600 text-black"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                    {searchQuery ? (
                        <IoCloseOutline
                            onClick={() => setSearchQuery("")}
                            className="w-5 h-5 hover:text-red-500 duration-200 hover:cursor-pointer"
                        />
                    ) : (
                        <FaSearch className="w-5 h-5 hover:cursor-pointer" />
                    )}
                </div> */}
                <div className="hidden md:inline-flex items-center gap-2">
                    {navBarList.map((item) => (
                        <Link
                            href={item?.link}
                            key={item?.title}
                            className={`flex hover:font-medium w-20 h-6 justify-center items-center px-12 text-white hover:underline underline-offset-4 decoration-[1px] hover:text-gray-950 md:border-r-[2px] border-r-white-400 duration-200 last:border-r-0 ${pathname === item?.link && "text-gray-950 underline font-bold"
                                }`}
                        >
                            {item?.title}
                        </Link>
                    ))}
                </div>
                <HiMenuAlt2 onClick={() => setSidenav(!sidenav)} className="inline-flex md:hidden cursor-pointer w-8 h-6" />

                {sidenav && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                        <motion.div
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="w-[80%] h-full relative"
                        >
                            <div className="w-full h-full bg-primeColor p-6">
                                <Image
                                    className="w-28 mb-6"
                                    src={logo}
                                    alt="logoLight"
                                />
                                <ul className="text-gray-200 flex flex-col gap-2">
                                    {navBarList.map((item) => (
                                        <li
                                            className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                            key={item._id}
                                        >
                                            <Link
                                                href={item?.link}
                                                // state={{ data: location.split("/")[1] }}
                                                onClick={() => setSidenav(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4">
                                    <h1
                                        onClick={() => setCategory(!category)}
                                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                                    >
                                        Shop by Category{" "}
                                        <span className="text-lg">{category ? "-" : "+"}</span>
                                    </h1>
                                    {category && (
                                        <motion.ul
                                            initial={{ y: 15, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-sm flex flex-col gap-1"
                                        >
                                            <li className="headerSedenavLi">New Arrivals</li>
                                            <li className="headerSedenavLi">Gudgets</li>
                                            <li className="headerSedenavLi">Accessories</li>
                                            <li className="headerSedenavLi">Electronics</li>
                                            <li className="headerSedenavLi">Others</li>
                                        </motion.ul>
                                    )}
                                </div>
                                <div className="mt-4">
                                    <h1
                                        onClick={() => setBrand(!brand)}
                                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                                    >
                                        Shop by Brand
                                        <span className="text-lg">{brand ? "-" : "+"}</span>
                                    </h1>
                                    {brand && (
                                        <motion.ul
                                            initial={{ y: 15, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            className="text-sm flex flex-col gap-1"
                                        >
                                            <li className="headerSedenavLi">New Arrivals</li>
                                            <li className="headerSedenavLi">Gudgets</li>
                                            <li className="headerSedenavLi">Accessories</li>
                                            <li className="headerSedenavLi">Electronics</li>
                                            <li className="headerSedenavLi">Others</li>
                                        </motion.ul>
                                    )}
                                </div>
                            </div>
                            <span
                                onClick={() => setSidenav(false)}
                                className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                            >
                                <MdClose />
                            </span>
                        </motion.div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
