import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Shopproducts from "../components/Shopproducts";

function Shop ({cart,setCart}){
    return(
     <div className="container">
        <div className="flex  justify-center flex-wrap item-center border rounded-full w-[40%]"> 
        <div>
            <FaSearch />

                </div>
            <div>
             

            <input type="text" placeholder="Search Products and Category" />
            </div>
            <div>
                <p>Filter Category  </p>

            </div>
            <div>
                <IoMdArrowDropdown />

            </div>
        </div>
        <div>
            <Shopproducts cart={cart} setCart={setCart} />
        </div>
     </div>   
    )
}
export default Shop