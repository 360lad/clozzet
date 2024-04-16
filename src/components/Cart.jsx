import { RiDeleteBinFill } from "react-icons/ri";


function Cart ({cart,setCart}){
 
    return(
        <div className="flex justify-between">
            <div className="border p-[2em] w-[65%]">
                <div>
                <div className="flex m-[1em] justify-between border-b">
                    <h2>Product</h2>
                    <h2>QUantity</h2>
                    <h2>Price</h2>
                </div>
                <div className="flex items-center justify-between p-[1em] m-[2em]">
                     <div className="flex items-center">
                        <div className="h-[100px] w-[100px]"><img src="src/assets/shop-images/knitted-sweater.png" alt="" /></div>
                    <div>
                        <h3>Strip Knitted</h3>
                        <h3>Sweater</h3>
                        <h4>Size XL</h4>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="border rounded p-[1em] ">+</button>
                    <h2>0</h2>
                    <button className="border rounded p-[1em] ">-</button>
                    </div>
                   <div className="flex items-center gap-[2em]">
                    <h2>Ksh.2,250</h2>
                    <p><RiDeleteBinFill />
</p>
                    </div> 
            </div>
            <div className="flex items-center justify-between p-[1em] m-[2em]">
                     <div className="flex items-center">
                        <div className="h-[100px] w-[100px]"><img src="src/assets/shop-images/unisex.png" alt="" /></div>
                    <div>
                        <h3>Unisex Airfoce</h3>
                        <h3>Sneakers</h3>
                        <h4>Size :40</h4>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="border rounded p-[1em] ">+</button>
                    <h2>0</h2>
                    <button className="border rounded p-[1em] ">-</button>
                    </div>
                   <div className="flex items-center gap-[2em]">
                    <h2>Ksh.2,000</h2>
                    <RiDeleteBinFill />

                    </div> 
            </div>
            <div className="flex items-center justify-between p-[1em] m-[2em]">
                     <div className="flex items-center">
                        <div className="h-[100px] w-[100px]"><img src="src/assets/shop-images/slim-banquet-dress.png" alt="" /></div>
                    <div>
                        <h3>Slim Banquet </h3>
                        <h3>SDress</h3>
                        <h4>Size M</h4>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="border rounded p-[1em] ">+</button>
                    <h2>0</h2>
                    <button className="border rounded p-[1em] ">-</button>
                    </div>
                   <div className="flex items-center gap-[2em]">
                    <h2>Ksh.10,250

                    </h2>
                    <RiDeleteBinFill />
                    </div> 
            </div>
            
            <div className="flex items-center justify-between p-[1em] m-[2em]">
                     <div className="flex items-center">
                        <div className="h-[100px] w-[100px]"><img src="src/assets/shop-images/denim-jeans.png" alt="" /></div>
                    <div>
                        <h3>Women Denim</h3>
                        <h3>jeans</h3>
                        <h4>Size XL</h4>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="border rounded p-[1em] ">+</button>
                    <h2>0</h2>
                    <button className="border rounded p-[1em] ">-</button>
                    </div>
                   <div className="flex items-center gap-[2em]">
                    <h2>Ksh.10,250 </h2>
                    <RiDeleteBinFill />

                   

                    </div> 
            </div>
            
            
            
            </div>
            
            </div>
            <div className="border rounded p-[2em] h-fit">
                <h2 className="flex justify-center">Cart Summary</h2>
                <p className="flex justify-center" >Have a promo code? Apply Here</p>
                <div>
                   <input className="border rounded p-[1em] m-[.5em]" type="text"  placeholder="Promo Code (Optional)"/>
                   <button className="bg-[#45C9A1] p-[1em] text-[white]
                   ">Apply</button> 
                </div>
                <div>
                    <div className="flex justify-between">
                 <p>Subtotal</p>
                 <p>16,000</p>

                    </div>
                    <div className="flex justify-between"> 
                         <p>Delivery fee</p>
                         <p>Ksh.400</p>
                    </div>
                    <div>
                        <div className="flex justify-between border-t">
                            <p>Total</p>
                            <p>Ksh.16,400</p>
                        </div>
                        <div className="bg-[#45C9A1] p-[1em] flex justify-center m-[3em] text-[white]">
                        <button  >Checkout</button>

                        </div>
                    </div>

                </div>
            </div>
  
        </div>
    )
}
export default Cart