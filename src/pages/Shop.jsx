import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Shopproducts from "../components/Shopproducts";

function Shop (){
    return(
     <div className="container">
        <div className="flex  justify-center item-center border rounded-full w-[40%]"> 
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
            <Shopproducts/>
        </div>
     </div>   
    )
}
export default Shop