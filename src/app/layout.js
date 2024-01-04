import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageButton from '@/components/PageButton';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PageButton />
        {children}
      </body>
    </html>
  )
}
