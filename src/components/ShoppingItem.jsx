import React from "react";
import { useDispatch } from "react-redux";
import { add } from "./state/Slice/CartSlice";
import { Link } from "react-router-dom";

function ShoppingItem({ item }) {
  const { id, name, image, price } = item;

  const dispatch = useDispatch();

  return (
    <div>
      <Link to={`/ItemDetails/${id}`}>
        <div className="bg-gray h-[400px] flex item-center justify-center">
          <img
            src={image}
            alt="item-imagess"
            className="w-[300px] h-[300px] bg-grey"
          />
        </div>
      </Link>
      <div className="mt-[-50px] flex justify-between items-center px-4">
        <div>
          <div className="text-sm font-bold mb-3">{name}</div>
          <div className="text-xl font-bold">{price}</div>
        </div>
        <button className="bg-grey p-3" onClick={() => dispatch(add(item))}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default ShoppingItem;
