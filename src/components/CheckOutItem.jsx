import React from "react";
import { HiX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { increase, decrease,remove } from "./state/Slice/CartSlice";

function CheckOutItem({ cartItem }) {
  const { id, price, amount, name, image } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border border-solid border-glass p-4 mb-6">
      <div className="flex items-center gap-4">
        <img src={image} alt="cart-item" className="w-20 h-20 object-cover" />
      </div>
      <div className="flex items-start flex-col max-w-[68rem]">
        <div>{name}</div>
        <div className="flex items-center gap-4 mt-2">
          <button
            className="w-8 h-8 text-white bg-black rounded-full"
            onClick={() => dispatch(decrease(cartItem))}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="w-8 h-8 text-white bg-black rounded-full"
            onClick={() => dispatch(increase(cartItem))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col item-center gap-3">
        <HiX className="ext-xl cursor-pointer" onClick={()=>dispatch(remove(cartItem))}/>
        <div>${(price * amount).toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CheckOutItem;
