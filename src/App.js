import './App.css';
import React from 'react'
import Header from "./component/layout/Header/Header"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"
import webFont from "webfontloader"
import { useEffect, useState } from 'react';
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails"
import Products from "./component/Product/Products"
import Search from "./component/Product/Search"
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import { loadUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios"
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import ProtectedRoute from './component/Route/ProtectedRoute';
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from './component/Admin/NewProduct';
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from './component/Admin/OrderList';
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import NotFound from "./component/layout/Not Found/NotFound.js";

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  const stripePromise = loadStripe(stripeApiKey);

  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })

    store.dispatch(loadUser());
    getStripeApiKey();

  }, [])

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />

        <Route exact path="/search" element={<Search />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />

        <Route exact path="/account" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route exact path="/me/update" element={isAuthenticated ? <UpdateProfile /> : <Navigate to="/login" />} />
        <Route exact path="/password/update" element={isAuthenticated ? <UpdatePassword /> : <Navigate to="/login" />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />

        <Route exact path="/login" element={<LoginSignUp />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
        </Route>

        {/* <Route exact path="/shipping" element={isAuthenticated ? <Shipping /> : <Navigate to="/login" />} /> */}
        <Route exact path="/shipping" element={<Shipping />} />
        <Route exact path="/order/confirm" element={isAuthenticated ? <ConfirmOrder /> : <Navigate to="/login" />} />

        {stripeApiKey && (
          <Route
            exact
            path="/process/payment"
            element={
              isAuthenticated ? (
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        )}
        <Route exact path="/success" element={isAuthenticated ? <OrderSuccess /> : <Navigate to="/login" />} />

        <Route exact path="/orders" element={isAuthenticated ? <MyOrders /> : <Navigate to="/login" />} />

        <Route exact path="/order/:id" element={isAuthenticated ? <OrderDetails /> : <Navigate to="/login" />} />

        <Route path="/admin/product" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/product" element={<NewProduct />} />
        </Route>
        <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
        </Route>

        {/* <Route exact path="/admin/dashboard" element={<Dashboard />} /> */}
        <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin />} >
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>

        <Route exact path="/admin/products" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/products" element={<ProductList />} />
        </Route>

        <Route path="" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/orders" element={<OrderList />} />
        </Route>

        <Route path="" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
        </Route>

        <Route path="" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/users" element={<UsersList />} />
        </Route>

        <Route path="" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/user/:id" element={<UpdateUser />} />
        </Route>

        <Route path="" element={<ProtectedRoute isAdmin />} >
          <Route exact path="/admin/reviews" element={<ProductReviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
