import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageButton from '@/components/PageButton';
import HeaderBottom from '@/components/HeaderBottom';
import Layout from '@/components/Layout';
import Footer from '@/components/Footer';
import FooterBottom from '@/components/FooterBottom';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asago Fashion',
  description: 'One stop solution for all your fashion needs.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="font-display">
        <Layout>
          <Navbar />
          <HeaderBottom />
          {/* <PageButton /> */}
          {children}
          <Footer />
          <FooterBottom />
        </Layout>
      </body>
    </html>
  )
}
