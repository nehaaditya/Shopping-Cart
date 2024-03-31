import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div>
          <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">Your Cart</div>
          <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">Summary</div>
          <p>
            <span className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1"
            >Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p
          >Total Amount: ${totalAmount }</p>
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
