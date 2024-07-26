import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage.js";
import Cart from "./components/cart/cart.js";
import Login from "./components/login/login.js";
import Profile from "./components/profile/profile.js";
import Checkout from "./components/checkout/checkout.js";
import Registration from "./components/registration/registration.js";
import Search from "./components/search/search.js";
import ConfirmCart from "./components/confirmcart/confirmcart.js";
import ThankYou from "./components/thankyou/thankyou.js";
import ViewDetails from "./components/viewdetails/viewdetails.js";
import AddBook from "./components/addbook/addbook.js";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/search" element={<Search />} />
                <Route path="/confirmcart" element={<ConfirmCart />} />
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="/viewdetails/:id" element={<ViewDetails />} />
                <Route path="/addbook" element={<AddBook />} />
            </Routes>
        </div>
    );
}

export default App;