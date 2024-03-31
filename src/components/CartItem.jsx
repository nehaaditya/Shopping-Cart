
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div>

        <div className="h-[180px] w-[180px]" >
          <img 
          className="h-full w-full"
          src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description .split(" ").slice(0,10).join(" ")+ "..."}</h1>
          <div>
            <p
            className="text-green-600 font-semibold "
            >${item.price}</p>
            <div
            
            onClick={removeFromCart}>
              <AiFillDelete />
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
