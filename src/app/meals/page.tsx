import HeroMeals from '../components/banners/HeroMeal'

export default function meals() {
    // use context
    // useNavigate
    // add to cart
    // check login

    return (
        <div className=''>
            <HeroMeals />
            <div className='md:m-10'>
                <h1>Select meals</h1>
                <h3 className='text-center'>Select 3 meals and proceed to cart for checkout </h3>
                <div className="p-5 my-5">
                    <div className="meals-container">
                        {/* add MERN code  */}
                    </div>
                </div>
            </div>
        </div>
    )
}


{/* {meals.map((meal) => {
    return (
        <div key={meal._id} className="meal">
        <img src={meal.img} width="300" alt="" />
        <h2 className="mealName">{meal.mealName} <strong className="price">€ {meal.price}</strong></h2>
        <p className="mealDescription">{meal.description}</p>
        
        
        <div>
        <button onClick={() => addToCart(meal)}>Add To Cart</button>
        </div>
        <ReactStars
        count={5}
        value={meal.rating}
        size={16}
        isHalf={true}
        activeColor="yellow"
        />
        </div>
        );
    })} */}