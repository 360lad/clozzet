import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";


function Nav(){
    return(
        <div className="container mx-auto flex justify-between">
            <div  className="flex justify-centre  items-center ">
            <img src="src/assets/images/logo.svg" alt="assets" />
                                                                   
        <ul className="flex justify-centre  item-center gap-10">
            <li className="hidden  md:block ">Home</li>
            <li className="hidden  md:block ">About Us</li>
            <li className="hidden  md:block ">Shop</li>
            
        </ul>
        </div>
                   <div  className="flex justify-centre  items-center ">

            <ul className="flex justify-center items-center gap-10">
            <FaShoppingCart className="text-[40px]" />

                <h2>Sign Up</h2>
                <button className="border border-black rounded-full px-[2.5em] hidden">Login</button>
                <FaBars className="sm:hidden" />

            </ul>
        </div>
        </div>
        
    )
}
export default Nav