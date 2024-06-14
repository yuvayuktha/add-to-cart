import React from "react";
import { HiChevronLeft ,HiTrash} from "react-icons/hi";
import {useDispatch, useSelector} from "react-redux"
import {open} from './state/Slice/CheckOutSlice'
import CheckOutItem from "./CheckOutItem";
import {clear} from "./state/Slice/CartSlice"

function CheckOut() {

    const dispatch = useDispatch();

    const {cartItems, total ,amount} = useSelector((store)=>{
        return store.cart
    })

  return (
    <div className="bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen">
      <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={()=>dispatch(open())}>
              <HiChevronLeft />
              <span className="uppercase text-[0.95rem] select-none">
                continue shopping
              </span>
            </div>
            <div className="">
            Shopping bag ({amount})
          </div>
          </div>
          <div className="mt-8">
             {
                cartItems.length === 0 ? (
                    <div className="uppercase text-center text-3xl">Your Cart Is Empty</div>
                ):(
                    <>
                       {
                        cartItems.map((cartItem)=>{
                            return <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                        })
                       }
                       <div className="flex justify-between mt-12">
                         <div className="">Total cast : ${total.toFixed(2)}</div>
                         <HiTrash className="text-3xl cursor-pointer" onClick={()=>dispatch(clear())}/>
                       </div>
                       <div className="text-center cursor-pointer bg-black text-white p-3 mt-8">CheckOut</div>
                    </>
                )
             }
           </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
