import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


import Featuredcollection from "./Featuredcollection"

import Leatherjacket from"../assets/images/leather-jacket.png"
import sweatshirt from"../assets/images/sweatshirts.png"

import pallazo from"../assets/images/pallazo.png"
import Denim from"../assets/images/denim.png"


function Featuredcollections({cart,setCart}){
    return(
        <div>
            <h2>Featured Collections</h2>
    <div className="flex"> 
    <MdArrowBackIos size={80}/>


    <Featuredcollection  cart={cart} setCart={setCart} img={Leatherjacket} title="Brown Leather Jacket" price="Ksh.2,250"/>
    <Featuredcollection  cart={cart} setCart={setCart} img={sweatshirt} title="Round-neck Sweatshirt" price="Ksh.2000"/>
    <Featuredcollection  cart={cart} setCart={setCart} img={pallazo} title="Pleated Poallazo Trousers" price="Ksh.1800"/>
    <Featuredcollection  cart={cart} setCart={setCart} img={Denim} title="M-22 Denim Jacket" price="Ksh.1250"/>
    <MdArrowForwardIos size={80}  />

        </div>
        </div>
            
   
    )
}

export default Featuredcollections
