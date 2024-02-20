import { useRouter } from 'next/navigation';
import React from 'react';

const CategoryPage = ({ params }) => {

    return (
        <div className='text-lg font-semibold'>
            <p>Hello from category page.</p>
            <p>Category is: <span className='text-red-500'>{params.slug}</span></p>
        </div>
    );
};

export default CategoryPage;