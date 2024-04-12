import Shopproduct from "./Shopproduct";
import jeans from "../assets/shop-images/ragged-jeans.png"
import sweater from "../assets/images/sweatshirts.png"
import banquet from "../assets/shop-images/slim-banquet-dress.png"
import denim from "../assets/images/denim.png"
import leather from "../assets/images/leather-jacket.png"
import watch from "../assets/shop-images/quartz-watch.png"
import women from "../assets/shop-images/denim-jeans.png"
import brown from "../assets/shop-images/brown-handbag.png"
import unisex from "../assets/shop-images/graphic-tshirts.png"
import bomber from "../assets/shop-images/bomber.png"
import pallazo from "../assets/images/pallazo.png"
import pure from "../assets/shop-images/leather-shoes.png"
import sperneti from "../assets/shop-images/serpenti-forever.png"
import nike from "../assets/shop-images/unisex.png"
import cocktail from "../assets/shop-images/cocktail.png"
import offshoulder from "../assets/shop-images/Off-The-Shoulder.png"
import pleated from "../assets/shop-images/Airsense-pleated.png"
import smartwatch from "../assets/shop-images/smartwatch.png"
import zoochi from "../assets/shop-images/ZOOSHI-COBALT.png"
import knitted from "../assets/shop-images/knitted-sweater.png"


function Shopproducts(){
    return(
        <div>
            <div className="flex">
            <Shopproduct img={jeans} title="Blue Rugeed Jeans" price="Ksh.2,250"/>
            <Shopproduct img={sweater} title="Sweat Shirts" price="Ksh.2,250"/>
            <Shopproduct img={banquet} title="Red Banquet Dress" price="Ksh.10,250"/>
            <Shopproduct img={denim} title="Blue denim Jacket" price="Ksh.2,250"/>

            </div>
            <div className="flex">
            <Shopproduct img={leather} title="Brown Leather Jacket" price="ksh.2,250"/>
            <Shopproduct img={watch} title="Quartz Watch "  price="ksh.2,250"/>
            <Shopproduct img={women} title="Women Denim Jeans" price="ksh.2,250"/>
            <Shopproduct img={brown} title="Brown Handbag"  price="ksh.2,250"/>
                        </div>
            <div className="flex">
            <Shopproduct img={unisex} title="Unisex Graphic T-shirt" price="ksh.2,250"/>
            <Shopproduct img={bomber} title="Black Bomber Jacket" price="ksh.2,250"/>
            <Shopproduct img={pallazo} title="Pleated Pallazo Pants "price="ksh.2,250"/>
            <Shopproduct img={pure} title="Pure Leather Shoes " price="ksh.2,250"/>
            </div>
            <div className="flex">
            <Shopproduct  img={sperneti} title="" price="ksh.2.250"/> 
            <Shopproduct  img={nike} title="" price="ksh.2.250"/>
            <Shopproduct  img={cocktail} title="" price="ksh.2.250"/>
            <Shopproduct  img={offshoulder} title="" price="ksh.2.250"/>  
            </div>
            <div className="flex">
            <Shopproduct img={pleated} title="Airsense Pleated Pants" price="ksh.2,250"/>
            <Shopproduct img={smartwatch} title="Classy Smart Watch" price="ksh.2,250"/>
            <Shopproduct img={zoochi} title="Blue Platform  Heels" price="ksh.2,250"/>
            <Shopproduct img={knitted} title="Strip Knitted Sweater" price="ksh.2,250"/>

            </div>
        </div>
    )
}
export default Shopproducts