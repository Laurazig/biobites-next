import HeroCart from '../components/banners/HeroCart'

export default function cart() {
    return (
        <div className=''>
            <HeroCart />
            <div className='md:m-10'>
                <h1>Cart</h1>
                <p>selected meals will show here</p>
            </div>
        </div>
    )
}