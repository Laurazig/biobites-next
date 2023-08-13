import HeroCart from '../components/banners/HeroCart'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function cart() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <HeroCart />
            <main className='text-center'>
                <h1>Cart</h1>
                <p>selected meals will show here</p>
            </main>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}