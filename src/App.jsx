import "./App.css";
import Navbar from "./components/Navbar";
import ShoppingContainer from "./components/ShoppingContainer";
import CheckOut from "./components/CheckOut";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { total } from "./components/state/Slice/CartSlice";
import {Outlet,RouterProvider,createBrowserRouter} from 'react-router-dom'
import ItemDetails from "./components/ItemDetails";

const Layout = () =>{
  const { isOpen } = useSelector((store) => store.checkout);
 return (
  <div>
    <Navbar />
    {isOpen && <CheckOut />}
    <Outlet />
  </div>
 )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:   <ShoppingContainer />
      },
      {
        path:"/ItemDetails/:id",
        element:<ItemDetails />
      },
     
    ]
  }
])

function App() {
  const { cartItems } = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(total())
    },[cartItems])
  return (
    <div className="font-BeVietnamPro">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
