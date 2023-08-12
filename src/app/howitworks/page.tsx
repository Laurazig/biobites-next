import HeroHow from '../components/banners/HeroHow'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function howitworks() {
    return (
<div>
    <Nav />
    <HeroHow />
    <h1>how it works </h1>
    <div>
    <h2>1. Choose 3 meals</h2>
        <p>login and select your 3 meals from the long list. On the Cart page enter your card details and click to confirm order. Easy peasy!</p>
    </div>
    <div></div>
    <div>
<h2>2. Get your delivery</h2>
<p>Each week, you’ll open simple step-by-step recipes complete with nutritional information and fresh, pre-measured ingredients to get you whipping up delicious dinners in no time.</p>
    </div>
    <div></div>
    <div>
        <h2>3. Cook, eat, enjoy!</h2>
        <p>The old “what do you want to eat?” conversation is about to be banished from your life. Welcome to a world where dinner is always planned, simple, and delicious.</p>
    </div>

    <h2>FAQ</h2>
    <div>
        <div>
            <h3>Can I select my meals?</h3>
            <p>Yes! You can choose your meals every week.</p>
        </div>
        <div>
            <h3>How will my food stay cool?</h3>
            <p>We carefully handpack all ingredients with special ice packs and insulation, so your food keeps cool until you get home.</p>
        </div>
        <div>
            <h3>What if I don't want a delivery every week?</h3>
            <p>No worries. You can easily skip a week (or several!) when you need to.
Just be sure to do so by your cutoff time 5 days prior to your delivery.</p>
        </div>
    </div>
    <Footer />
</div>
    )}