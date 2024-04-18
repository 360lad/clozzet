import Cart from "../components/Cart";
import Cartproducts from "../components/Cartproducts";
import Cartproduct from "../components/Cartproduct";


function Cartpage({ cart, setCart }) {
  return (
    <div>
      <div className="flex  justify-between p-[1em] m-[2em] flex-wrap">
        <div className="border p-[2em] w-[65%]">
          <div className="flex m-[1em] justify-between border-b">
            <h2>Product</h2>
            <h2>Quantity</h2>
            <h2>Price</h2>
          </div>

          <Cartproducts cart={cart} setCart={setCart}/>
        </div>
        <div className="border rounded p-[2em] h-fit bg-[gray]">
          <h2 className="flex justify-center">Cart Summary</h2>
          <p className="flex justify-center">Have a promo code? Apply Here</p>
          <div>
            <input
              className="border rounded p-[1em] m-[.5em]"
              type="text"
              placeholder="Promo Code (Optional)"
            />
            <button
              className="bg-[#45C9A1] p-[1em] text-[white]
                   "
            >
              Apply
            </button>
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
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
