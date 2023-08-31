import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import OrderHistory from "./Chef/Pages/OrderHistory";
import Layout from "./Chef/Pages/Layout";
import OnlineOrder from "./Chef/Pages/onlineOrder";
import Home from "./Chef/Pages/Home";
import AddProduct from "./Chef/Pages/AddProduct";
//import Login from "./Chef/Pages/Login";
import ChefSignup from "./Chef/Pages/ChefSignup";
import "./App.css";
import Update from "./Chef/Pages/Update";

import Routing from "./User/Containers/Routing/Routing";
import ChefLogin from "./Chef/Pages/ChefLogin";



import ManagerLayout from "./Manager/Pages/ManagerLayout";
import ManagerOrderHistory from "./Manager/Pages/ManagerOrderHistory";
import ManagerPendingOrders from "./Manager/Pages/ManagerPendingOrders";
import ManagerSales from "./Manager/Pages/ManagerSales";
import ManagerTableAssist from "./Manager/Pages/ManagerTableAssist";
import ManagerChefReg from "./Manager/Pages/ManagerChefReg";
import ManagerSignup from "./Manager/Pages/ManagerSignup";
import ManagerSignin from "./Manager/Pages/ManagerSignin";
import ManagerOurMenu from "./Manager/Pages/ManagerOurMenu";
import ManagerTableOrders from "./Manager/Pages/ManagerTableOrders";
import ManagerOnlineOrders from "./Manager/Pages/ManagerOnlineOrders";







const storedata = JSON.parse(localStorage.getItem("products"));

function App() {
  useEffect(() => {
    if (storedata) {
      setCartItems(storedata);
    }
  }, []);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (item) => {
    const ProductExist = cartItems.find((product) => product._id === item._id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((product) =>
          product._id === item._id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : product
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (item) => {
    const ProductExist = cartItems.find((product) => product._id === item._id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((product) => product._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((product) =>
          product._id === item._id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : product
        )
      );
    }
  };

  const handleCartClearence = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/chef/login" element={<ChefLogin/>} />
            <Route path = "/chef/signup" element={<ChefSignup/>}/>
          <Route path="/chef" element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path="/chef/orderhistory" element={<OrderHistory/>} />
            <Route path="/chef/onlineOrders" index element={<OnlineOrder />} />
            <Route path="/chef/home" element={<Home />} />
            <Route path="/chef/addproduct" element={<AddProduct />} />
            <Route path="/chef/update/:id" element={<Update />} />
           
          </Route>
        </Routes>

         {/* Browser Router For user */}

      </BrowserRouter>

      

      <BrowserRouter>
        <Routing
          handleAddProduct={handleAddProduct}
          cartItems={cartItems}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearence={handleCartClearence}
        />
    
    
    

      </BrowserRouter>



    
       <BrowserRouter>
       <Routes>
      
    <Route path="manager/signup" element={<ManagerSignup/>}/>
    <Route path="manager/signin" element={<ManagerSignin/>}/>
      <Route path="/manager"  element={<ManagerLayout/>}>
        <Route index element={<ManagerOurMenu/>}/>
        <Route path="/manager/menu" index element={<ManagerOurMenu/>}/>
        <Route path="/manager/orderhistory" element={<ManagerOrderHistory/>}/>
        <Route path="/manager/pendingorders" element={<ManagerPendingOrders/>}/>
        <Route path="/manager/sales" element={<ManagerSales/>} />
        <Route path="/manager/tableassist" element={<ManagerTableAssist/>}/>
        <Route path="/manager/chefreg" element={<ManagerChefReg/>}/>
        <Route path="/manager/tableorders" element={<ManagerTableOrders/>}/>
        <Route path="/manager/online" element={<ManagerOnlineOrders/>}/>
       
        
      </Route>
      
    </Routes>
    
       </BrowserRouter>

       
    
    </div>
  );
}

export default App;
