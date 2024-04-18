import { RiDeleteBinFill } from "react-icons/ri";
import { useEffect, useState } from "react";

function Cartproduct({ img, title, price, cart }) {
  const [cartCopy, setCartCopy] = useState([]);
  useEffect(() => {
    setCartCopy([...cart]);
  }, []);
  function handleCartActions(action, product) {
    if (action === "increment") {
      setCartCopy((prev) => [...prev, product]);
    } else if (action === "decrement") {
      const cartCopyItems = [...cartCopy];
      const cartItemIndex = cartCopyItems.indexOf(product);
      cartCopyItems.splice(cartItemIndex, 1);
      setCartCopy(cartCopyItems);
    }
  }
  return (
    <div>
      <div className="flex items-center justify-evenly ">
        {console.log(cartCopy)}

        <div className="h-[100px] w-[100px]">
          {" "}
          <img src={img} alt="" />
        </div>
        <div>
          <h2>{title}</h2>

        
        </div>

        <div className="flex items-center">
          <button
            onClick={() =>
              handleCartActions("increment", { img, title, price })
            }
            className="border rounded p-[1em] "
          >
            +
          </button>
          <h2>{cartCopy.filter((item) => item.title === title).length}</h2>
          <button
            onClick={() =>
              handleCartActions("decrement", { img, title, price })
            }
            disabled={
              cartCopy.filter((item) => item.title === title).length === 1
            }
            className="border rounded p-[1em] "
          >
            -
          </button>
        </div>
        <div className="flex items-center gap-[2em]">
          <h2>
            {" "}
            {` Ksh. ${cartCopy
              .filter((item) => item.title === title)
              .reduce(
                (acc, curr) =>
                  acc +
                  parseInt(curr.price.replace("Ksh.", "").replace(",", "")),
                0
              )
              .toLocaleString()}`}
          </h2>
          <p>
            <RiDeleteBinFill />
          </p>
        </div>
      </div>
    </div>
  );
}
export default Cartproduct;
