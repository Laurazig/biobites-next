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
  // const {
  //   cart,
  //   setCart,
  //   user,
  //   setOrders,
  //   orders,
  //   addToCart,
  //   removeFromCart,
  //   changeQuantity,
  // } = useContext(MyContext);

  // const navigate = useNavigate();
  // const [message, setMessage] = useState('');
  // const [placedOrder, setPlacedOrder] = useState(false);
  // const [total, setTotal] = useState(0);
  // const [userData, SetUserData] = useState(null);
  // const [sameAddress, setSameAddress] = useState(true);
  // //const [stripeState, setStripeState] = useState(false)

  // useEffect(() => {
  //   const sum = cart.reduce((acc, item) => {
  //     acc += item.price * item.quantity;
  //     return acc;
  //   }, 0);
  //   setTotal(sum);
  // }, [cart]);

  // // * Yohannes and Sameer modify the placeOrder function
  // // ===========================================================================
  // // The customer placing an order in the front end and post it in the back end
  // //============================================================================
  // const submitOrder = async (e) => {
  //   e.preventDefault();
  //   if (!user) {
  //     navigate('/register');
  //   } else if (cart.length < 3) {
  //     alert('Minimum order is three meals');
  //   } else {
  //     const newOrder = {
  //       meals: cart.map((item) => item._id),
  //       total: total,
  //       userId: user.id,
  //       deliveryAddress: {
  //         houseNo: sameAddress ? user.info.houseNo : e.target.hn.value,
  //         street: sameAddress ? user.info.street : e.target.stn.value,
  //         zipCode: sameAddress ? user.info.zipCode : e.target.zc.value,
  //         city: sameAddress ? user.info.city : e.target.city.value,
  //         phone: sameAddress ? user.info.phone : e.target.phone.value,
  //       },
  //     };

  //     // console.log(newOrder);

  //     const settings = {
  //       method: 'POST',
  //       body: JSON.stringify(newOrder),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     };
  //     const response = await fetch(`http://localhost:3001/orders`, settings);
  //     const result = await response.json();
  //     try {
  //       if (response.ok) {
  //         setOrders([...orders, result.data._id]);
  //         setPlacedOrder(true);
  //       } else {
  //         throw new Error(result.message);
  //       }
  //     } catch (err) {
  //       alert(err.message);
  //     }
  //   }
  // };
   // ===========================================================================
  // Deleting a single ordered meal by the customer
  //============================================================================

  // const deleteSingleOrderedMeal = (meal) => {
  //   let updatedCart = cart.filter((item) => item._id !== meal._id);
  //   setCart(updatedCart);
  //   localStorage.setItem('cart', JSON.stringify(updatedCart));
  // }; 
    // ===========================================================================
  // Customer clicks pay on success page to load stripe payment (order already in database)
  //============================================================================
  // const stripe = async () => {

  //   const pay = {
  //     total: total,
  //   };

  //   const settings = {
  //     method: 'POST',
  //     body: JSON.stringify(pay),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };
  //   const response = await fetch(`http://localhost:3001/payment`, settings);
  //   const result = await response.json();
  //   try {
  //     if (response.ok) {
  //       //setStripeState(true)
  //       setCart([]);
  //       window.location.href = result.url;
  //     } else {
  //       throw new Error(result.message);
  //     }
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };
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
