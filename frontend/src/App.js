import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Profilescreen from "./screens/Profilescreen";
import Shippingscreen from "./screens/Shippingscreen";
import Paymentscreen from "./screens/Paymentscreen";
import PlaceOrderscreen from "./screens/PlaceOrderscreen";
import Orderscreen from "./screens/Orderscreen";
import OrderListscreen from "./screens/OrderListscreen";
import UserListscreens from "./screens/UserListscreens";
import UserEditscreen from "./screens/UserEditscreen";
import ProductListscreen from "./screens/ProductListscreen";
import ProductEditscreen from "./screens/ProductEditscreen";
const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <Route path="/" component={Homescreen} exact />
          <Route path="/search/:keyword" component={Homescreen} exact />
          <Route path="/page/:pageNumber" component={Homescreen} exact />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={Homescreen}
            exact
          />
          <Route path="/product/:id" component={Productscreen} />
          <Route path="/login" component={Loginscreen} />
          <Route path="/placeorder" component={PlaceOrderscreen} />
          <Route path="/order/:id" component={Orderscreen} />
          <Route path="/register" component={Registerscreen} />
          <Route path="/profile" component={Profilescreen} />
          <Route path="/shipping" component={Shippingscreen} />
          <Route path="/payment" component={Paymentscreen} />
          <Route path="/cart/:id?" component={Cartscreen} />
          <Route path="/admin/userlist" component={UserListscreens} />
          <Route
            path="/admin/productlist"
            component={ProductListscreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListscreen}
            exact
          />
          <Route path="/admin/user/:id/edit" component={UserEditscreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditscreen} />
          <Route path="/admin/orderlist" component={OrderListscreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
