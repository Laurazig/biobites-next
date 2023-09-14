"use client";
import Image from "next/image";
import HeroCart from "../components/banners/HeroCart";
import dish1 from "../../../public/assets/dish1.jpg";
import dish2 from "../../../public/assets/dish2.jpg";

export default function cart() {
  const deleteImage = () => {
    document.getElementById("imageToRemove")?.remove();
    document.getElementById("buttonToRemove")?.remove();
  };
  return (
    <div className="">
      <HeroCart />
      <div className="md:m-10">
        <h1>Cart</h1>
        <p>selected meals will show here</p>
        <div className="meals flex">
          <div className="text-left">
            <Image
              id="imageToRemove"
              src={dish1}
              alt="food"
              className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
            ></Image>
            <button
              onClick={deleteImage}
              id="buttonToRemove"
              className="w-25 p-2 bg-slate-500 rounded-md text-white text-xs"
            >
              click to delete
            </button>
          </div>
          <div className="text-left">
            <Image
              id="imageToRemove"
              src={dish2}
              alt="food"
              className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
            ></Image>
            <button
              onClick={deleteImage}
              id="buttonToRemove"
              className="w-25 p-2 bg-slate-500 rounded-md text-white text-xs"
            >
              click to delete
            </button>
          </div>
          <div className="text-left">
            <Image
              id="imageToRemove"
              src={dish1}
              alt="food"
              className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
            ></Image>
            <button
              onClick={deleteImage}
              id="buttonToRemove"
              className="w-25 p-2 bg-slate-500 rounded-md text-white text-xs"
            >
              click to delete
            </button>
          </div>
          <div className="text-left">
            <Image
              id="imageToRemove"
              src={dish2}
              alt="food"
              className="object-contain w-24 h-auto sm:w-36 lg:w-52 mb-10 rounded-lg hover:scale-[1.01]"
            ></Image>
            <button
              onClick={deleteImage}
              id="buttonToRemove"
              className="w-25 p-2 bg-slate-500 rounded-md text-white text-xs"
            >
              click to delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
