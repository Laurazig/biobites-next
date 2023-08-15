import HeroHow from '../components/banners/HeroHow'

export default function howitworks() {
    return (
        <div className=''>
            <HeroHow />
            <div className='md:m-10'>
                <h1>How It Works </h1>
                <div className="md:flex ">
                    <div className='block text-center m-5'>
                        <div className="bg-green-700 h-10 w-10 rounded-full text-center text-white m-auto">1</div>
                        <h2>Choose 3 meals</h2>
                        <p className='text-justify'>login and select your 3 meals from the long list. On the Cart page enter your card details and click to confirm order. Easy peasy!</p>
                    </div>
                    <div></div>
                    <div className='block text-center m-5'>
                        <div className="bg-green-700 h-10 w-10 rounded-full text-center text-white m-auto">2</div>
                        <h2>Get your delivery</h2>
                        <p className='text-justify'>Each week, you will open simple step-by-step recipes complete with nutritional information and fresh, pre-measured ingredients to get you whipping up delicious dinners in no time.</p>
                    </div>
                    <div></div>
                    <div className='block text-center m-5'>
                        <div className="bg-green-700 h-10 w-10 rounded-full text-center text-white justify-center m-auto">3</div>
                        <h2>Cook, eat, enjoy!</h2>
                        <p className='text-justify'>The old “what do you want to eat?” conversation is about to be banished from your life. Welcome to a world where dinner is always planned, simple, and delicious.</p>
                    </div>
                </div>

                <div className="border-green-500">
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
                </div>
            </div>
        </div>
    )
}