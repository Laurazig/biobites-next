import HeroMeals from '../components/banners/HeroMeal'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function meals() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <HeroMeals />
            <main>
                <h1>Select meals</h1>
                <h3 className='text-center'>Select 3 meals and proceed to cart for checkout </h3>
                <div className="p-5 my-5 bg-slate-400">

                </div>
            </main>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}