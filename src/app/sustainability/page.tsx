import HeroSust from '../components/banners/HeroSustainability'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


export default function howitworks() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <HeroSust />
            <h1>Sustainability</h1>
            <div>
                <h2>LESS FOOD WASTE</h2>
                <p>
                    Preventing unnecessary food waste has been a central part of our ethos since day one. Did you know that HelloFresh creates less food waste than retail grocery stores? We do this by perfectly portioning the ingredients you need for each meal. So there’s less prep for you, and less wasted food*.
                </p>
            </div>

            <div>
                <h2>A GREENER FOOTPRINT
                </h2>
                <p>Our carbon footprint is 25% lower than that of meals made from store-bought groceries, thanks to a streamlined supply chain and more efficient distribution, which reduce greenhouse gas emissions, according to a University of Michigan Study

                </p>
            </div>
            <div>
                <h2>INGREDIENT SOURCING</h2>
                <p>Responsible ingredient sourcing means getting to know our suppliers far beyond what you read on the label. We aim to get as close to the source of our supply as possible, visiting supplier facilities In person to ensure they meet our standards.</p>
            </div>
            <div>
                <h2>SMARTER PACKAGING</h2>
                <p>We are conscious that there must be a balance between sending a fresh, high-quality, safe product and ensuring that we do this with a minimum of packaging. Our packaging team is continuously testing new materials and products to ensure we are meeting our sustainability goals at the same time.</p>
            </div>
            <div className="mt-auto">
                <Footer />
            </div>
        </div>
    )
}