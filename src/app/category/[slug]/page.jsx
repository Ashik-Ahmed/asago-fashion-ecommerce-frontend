import Product from '@/components/Product';
import { useRouter } from 'next/navigation';
import React from 'react';

const CategoryPage = ({ params }) => {

    const products = [
        {
            _id: 1,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-1",
            "isNew": true,
            "isFreeShipping": true,
            "title": "Product 1",
            "rowprice": 125,
            "stock": 10,
            "price": 99.99,
            "brand": "Brand A",
            "ratings": 4.5
        },
        {
            _id: 2,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-2",
            "isNew": false,
            "title": "Product 2",
            "rowprice": 150,
            "stock": 10,
            "price": 129.99,
            "brand": "Brand B",
            "ratings": 4.8
        },
        {
            _id: 3,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-3",
            "isNew": true,
            "title": "Product 3",
            "rowprice": 99,
            "stock": 10,
            "price": 79.99,
            "brand": "Brand C",
            "ratings": 3.9
        },
        {
            _id: 4,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-4",
            "isNew": false,
            "title": "Product 4",
            "rowprice": 225,
            "stock": 10,
            "price": 199.99,
            "brand": "Brand A",
            "ratings": 4.2
        },
        {
            _id: 5,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-5",
            "isNew": true,
            "title": "Product 5",
            "rowprice": 175,
            "stock": 10,
            "price": 149.99,
            "brand": "Brand B",
            "ratings": 5
        },
        {
            _id: 6,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-6",
            "isNew": false,
            "title": "Product 6",
            "rowprice": 85,
            "stock": 10,
            "price": 69.99,
            "brand": "Brand C",
            "ratings": 3.5
        },
        {
            _id: 7,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-7",
            "isNew": true,
            "title": "Product 7",
            "rowprice": 110,
            "stock": 10,
            "price": 89.99,
            "brand": "Brand A",
            "ratings": 4.1
        },
        {
            _id: 8,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-8",
            "isNew": false,
            "title": "Product 8",
            "rowprice": 140,
            "stock": 10,
            "price": 119.99,
            "brand": "Brand B",
            "ratings": 4.7
        },
        {
            _id: 9,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-9",
            "isNew": true,
            "title": "Product 9",
            "rowprice": 95,
            "stock": 10,
            "price": 74.99,
            "brand": "Brand C",
            "ratings": 3.8
        },
        {
            _id: 10,
            "imageLink": "https://artisanclick.com/wp-content/uploads/2021/12/274-scaled.jpg",
            "slug": "product-slug-10",
            "isNew": false,
            "title": "Product 10",
            "rowprice": 200,
            "stock": 10,
            "price": 179.99,
            "brand": "Brand A",
            "ratings": 4.6
        }
    ]

    return (
        <div className='text-lg font-semibold'>
            {/* Your category page content */}
            <div className="mx-auto flex flex-col lg:flex-row space-x-0 lg:space-x-2">
                {/* Sidebar with Sorting Options */}
                <aside className="w-full lg:w-1/5 bg-gray-200 p-2 lg:border-r-2">
                    {/* Filter by Brand */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Filter by Brand</h2>
                        <ul>
                            <li>
                                <input type="checkbox" id="brand1" />
                                <label htmlFor="brand1" className="ml-2">Brand 1</label>
                            </li>
                            <li>
                                <input type="checkbox" id="brand2" />
                                <label htmlFor="brand2" className="ml-2">Brand 2</label>
                            </li>
                            {/* Add more brands as needed */}
                        </ul>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
                        <div>
                            <input type="range" min="0" max="100" />
                        </div>
                    </div>

                    {/* Color */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Filter by Color</h2>
                        <ul className="flex space-x-2">
                            <li>
                                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                            </li>
                            <li>
                                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                            </li>
                            {/* Add more color options */}
                        </ul>
                    </div>
                </aside>

                {/* Main Product Listing */}
                <main className="w-full lg:w-4/5">
                    {/* Category Header */}
                    <div className="bg-yellow-400 py-2">
                        <div className="container mx-auto text-center">
                            <h1 className="text-3xl font-semibold">{params?.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Category</h1>
                            <p className="text-gray-600">Discover the latest trends in {params?.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-2">
                        {products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CategoryPage;