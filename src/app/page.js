import Banner from "@/components/Banner";

import bannerImgOne from '@/app/assets/bannerImgOne.webp';
import bannerImgTwo from '@/app/assets/bannerImgTwo.webp';
import bannerImgThree from '@/app/assets/bannerImgThree.webp';
import NewArrival from "@/components/NewArrival";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {

  const banners = [bannerImgOne, bannerImgTwo, bannerImgThree];

  const products = [
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
  ]

  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
      <NewArrival products={products} />
      <HomeBanner />
    </main>
  )
}
