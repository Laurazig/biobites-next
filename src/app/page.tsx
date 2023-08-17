import Image from 'next/image'
import HeroHome from './components/banners/HeroHome';
import paperBag from '../../public/assets/hero/heroBag.jpg'
import logoVegan from '../../public/assets/logos/petaLogo.jpg'
import logoBio from '../../public/assets/logos/bioLogo.jpg'
import logoProtein from '../../public/assets/logos/highProteinLogo.jpg'

export default function Home() {

  return (
    <div className=''>
      <HeroHome />
      <div className='md:m-10 '>
        <div className="flex justify-center m-8 md:m-16 h-20 md:h-40 ">
          <Image src={logoBio} alt='bio logo' className='object-contain m-2'></Image>
          <Image src={logoVegan} alt='vegan logo' className='object-contain m-2'></Image>
          <Image src={logoProtein} alt='protein logo' className='object-contain m-2'></Image>
        </div>
        <div className='m-16'>
          <h2 className='m-5 text-2xl md:text-5xl'>Try our most popular dishes</h2>
          <a href="/meals">
            <button className='w-30 h-15 p-2 rounded-md bg-green-600 text-white'>Meal Selection</button>
          </a>
        </div>
        <div className='m-16'>
          <h2 className='m-5 text-2xl md:text-5xl'>Premium plan comming soon</h2>
          <div className="xl:flex">
            <Image src={paperBag} alt='paper bag handed over' className='object-contain '></Image>
            <div className="self-center text-sm">
              <h3>Many more advantages with BioBites Premium</h3>
              <p className='m-2 md:m-10'> BioBites will always provide a vast range of dishes to choose from and everything you need, already dosed according to the recipes you choose to cook. But With the premium membership you will always have free dessert and many more advantages like:</p>
              <ul className='ml-5 mb-5 font-light'>
                <li>- Extra meal choices.</li>
                <li>- Faster delivery.</li>
                <li>- Choosing the time you will receive your box.</li>
                <li>- 10% discount on orders Monday to Friday</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}


//Code imported from MERN Biobites for displaying meals :
// export const MyContext = React.createContext();


 // const [meals, setMeals] = useState([]);
  // useEffect( () => {
  //================================
  // Function to fetch meals data
  //===============================
  //   const fetchMealsData = async () => {
  //     const response = await fetch(process.env.REACT_APP_SERVER_URL + "/meals");
  //     const result = await response.json();
  //     try{
  //       if(response.ok) {
  //         setMeals(result)
  //       } else {
  //         throw new Error(result.message)
  //       }
  //     }catch(err){
  //       alert(err.message)
  //     }
  //   }
  //  fetchMealsData()
  // }, [] );

    //    <MyContext.Provider value={{ meals, setMeals }}>
    // <div className='App'>
    //     <Router>
    //       <Routes>
    //         <Route path="/meals" element={<MealsPage />} />
    //         </Routes>
    //       < Footer />
    //     </Router >
    //   </div >
    // </MyContext.Provider >
