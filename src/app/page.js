import Banner from "@/components/Banner";

import bannerImgOne from '@/app/assets/bannerImgOne.webp';
import bannerImgTwo from '@/app/assets/bannerImgTwo.webp';
import bannerImgThree from '@/app/assets/bannerImgThree.webp';

export default function Home() {

  const banners = [bannerImgOne, bannerImgTwo, bannerImgThree];

  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
    </main>
  )
}
