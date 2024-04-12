import Category from "./Category"
import jacket from "../assets/images/jacket.png"
import handbag from "../assets/images/handbag.png"
import  Shirts from "../assets/images/tshirt.png"
import Dresses from "../assets/images/dress.png"
import  Jeans from "../assets/images/jeans.png"
import shoe from "../assets/images/shoe.png"
import  sweater from "../assets/images/sweater.png"
function Categories(){
    return(
        <div>
     <h2 className="flex justify-center text-[3em]">Top Categories</h2>
     <div></div>
     <div className="flex justify-evenly"><Category img={jacket} title="Jacket"/>
     <Category img={handbag} title="HandBags" />
     <Category img={Shirts} title="Shirts"/><Category img={Dresses} title="Dresses"/><Category img={Jeans} title="Jeans"/>
     <Category img={shoe} title="Shoes"/><Category img={sweater} title="Sweater"/></div>
        </div>
    )
}
export default Categories