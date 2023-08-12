import Image from 'next/image'
import Nav from './components/Nav';
import HeroHome from './components/banners/HeroHome';
import paperBag from  '../../public/assets/hero/heroBag.jpg'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
    
      <main className="">
        <div>
          <HeroHome />
          {/* logos */}
          <h2>Try our most popular dishes</h2>
          <h2>Premium plan comming soon</h2>
          <Image src={paperBag} alt='paper bag handed over'></Image>
          <Footer />
        </div>
      </main>
    </div>
  );
}
