import { useState, useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { open } from "./state/Slice/CheckOutSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const dispatch = useDispatch();

  const { amount } = useSelector((store) => {
    return store.cart;
  });
  console.log(amount);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.screenY > 20);
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? "bg-grey shadow-lg" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <div className="flex item-center justify-between relative container py-4 px-2 mx-auto">
        <Link to={"/"}>
          <div className="font-bold text-xl">Shopify</div>
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => dispatch(open())}
        >
          <BiShoppingBag className="text-3xl opacity-80" />
          <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-black text-white">
            {amount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
