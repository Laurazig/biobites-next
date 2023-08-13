import Image from 'next/image'
import Nav from './components/Nav';
import HeroHome from './components/banners/HeroHome';
import paperBag from '../../public/assets/hero/heroBag.jpg'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <HeroHome />
      <main className="">
        {/* logos */}
        <h2>Try our most popular dishes</h2>
        <h2>Premium plan comming soon</h2>
        <Image src={paperBag} alt='paper bag handed over'></Image>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div >
  );
}
