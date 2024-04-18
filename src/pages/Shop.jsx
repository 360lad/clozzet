import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Shopproducts from "../components/Shopproducts";

function Shop ({cart,setCart}){
    return(
     <div className="container">
        <div className="flex  justify-center  items-center border rounded-full w-[40%] p-[1em] border-[#45C9A1]"> 
        <div className="flex items-center ">
            <FaSearch />

                </div>
            <div>
             

            <input type="text" placeholder="Search Products and Category outline-none " />
            </div>
            <div>
                <p>Filter Category  </p>

            </div>
            <div className="flex items-center">
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