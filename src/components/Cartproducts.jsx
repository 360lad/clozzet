import Cartproduct from "./Cartproduct";
function Cartproducts({ cart, setCart }) {
  return (
    <div>
      <div className="">
        {cart &&
          cart.map((item) => {
            return (
              <Cartproduct
                img={item.img}
                title={item.title}
                price={item.price}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
      </div>
    </div>
  );
}
export default Cartproducts;
