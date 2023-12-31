"use client";
import React, { useState, useEffect } from "react";
import HeroMeals from "../components/banners/HeroMeal";
import dish1 from "../../../public/assets/dish1.jpg";
import dish2 from "../../../public/assets/dish2.jpg";
// import dish3 from '../../../public/assets/dish3.jpg'
import Image from "next/image";

async function meals() {
  const [meals, setMeals] = useState([]);

  const deleteImange = () => {
    document.getElementById("imageToRemove")?.remove();
    document.getElementById("buttonToRemove")?.remove();
  };
  useEffect(() => {
    //================================
    // Function to fetch meals data
    //===============================
    const fetchMealsData = async () => {
      const response = await fetch(process.env.DATABASE_URL + "/meals");
      const result = await response.json();
      // try{
      if (response.ok) {
        setMeals(result);
      } else {
        throw new Error(result.message);
      }
      // }
      // catch(err){
      //   alert(err.message)
      // }
    };
    fetchMealsData();
  }, []);
  //************ */
  // add and remove
  // function create(){
  //     let myString = document.createElement("Demo");
  //     myString.textContent = "running a demo code";
  //     myString.setAttribute('class','note');
  //     document.body.appendChild(myString)
  // }
  //************ */
  // use context
  // useNavigate
  // add to cart
  // check login

  // const res = await fetch(
  //     '',
  //     {cache:'no-store'}
  // );
  //     const data = await res.json()
  return (
    <div className="">
      <HeroMeals />
      <div className="md:m-10">
        <h1>Select meals</h1>
        <h3 className="text-center">
          Select 3 meals and proceed to cart for checkout{" "}
        </h3>
        {/* <div>data.img</div> */}
        {/* <div>data.title</div> */}
        <div className="m-3 flex space-x-3 justify-between sm:justify-center overflow-scroll">
          <Image
            src={dish1}
            alt="food"
            className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
          ></Image>
          <Image
            src={dish2}
            alt="food"
            className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
          ></Image>
          <Image
            src={dish1}
            alt="food"
            className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
          ></Image>
          <Image
            src={dish2}
            alt="food"
            className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
          ></Image>
          <Image
            src={dish1}
            alt="food"
            className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
          ></Image>
          <Image
            src={dish2}
            alt="food"
            className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
          ></Image>
          {/* <Image src={dish3} alt='food' className='object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]'></Image> */}
          {/* add MERN code  */}
        </div>
        <div className="text-left">
          {/* Image.remove() */}
          <Image
            id="imageToRemove"
            src={dish1}
            alt="food"
            className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
          ></Image>
          <button
            onClick={deleteImange}
            id="buttonToRemove"
            className="w-25 p-2 bg-slate-500 rounded-md text-white text-xs"
          >
            click to delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default meals;

// {
/* {meals.map((meal) => {
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
    })} */
// }
