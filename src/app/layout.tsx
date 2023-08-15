import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biobites Next',
  description: 'Vegan Organic version of Hello Fresh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <Nav />
          <main className="text-center m-0">
            {children}
          </main>
          <div className="mt-auto">
            <Footer />
          </div>
        </div >
      </body>
    </html>
  )
}
