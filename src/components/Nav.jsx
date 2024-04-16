import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="container mx-auto flex justify-between">
            <div  className="flex justify-centre  items-center ">
         <Link to="/"><img src="src/assets/images/logo.svg" alt="assets" /></Link>   
                                                                   
        <ul className="flex justify-centre  item-center gap-10">
            
         <Link to="/"><li className="hidden  md:block ">Home</li></Link>
         <Link to="/Aboutus">   <li className="hidden  md:block ">About Us</li></Link>
         <Link to="/Shop">
            <li className="hidden  md:block ">Shop</li>
         
         </Link>
            
        </ul>
        </div>
                   <div  className="flex justify-centre  items-center ">

            <ul className="flex justify-center items-center gap-10">
                <Link to="/Cartpage"> <FaShoppingCart className="text-[40px]" /></Link>
            <span className="rounded-full bg-[#218365] text-[white] p-[.2em] absolute top-[-1%] right-[10%]">0</span>
                <Link to="/Signup">  <h2>Sign Up</h2></Link>
                 
                <button className="border border-black rounded-full px-[2.5em] hidden">Login</button>
                <FaBars className="sm:hidden" />

            </ul>
        </div>
        </div>
        
    )
}
export default Nav