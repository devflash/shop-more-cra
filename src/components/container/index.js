import React from 'react';
import SignUpPage from '../../pages/signup';
import SignInPage from '../../pages/signin';
import ProductPage from '../../pages/product';
import ProductsPage from '../../pages/index';
import OrdersPage from '../../pages/orders';
import CartPage from '../../pages/cart';
import AddressPage from '../../pages/address';
import PreviewPage from '../../pages/preview';
import PaymentPage from '../../pages/payment';
import WishlistPage from '../../pages/wishlist';

import { Routes, Route, useNavigate, useParams } from 'react-router-dom';

const Container = () => {
  const navigate = useNavigate();

  const navigateRoute = (path) => {
    navigate(path);
  };

  const getParams = () => useParams();

  return (
    <Routes>
      <Route
        path="/signup"
        element={<SignUpPage navigateRoute={navigateRoute} />}
      ></Route>
      <Route
        path="/signIn"
        element={<SignInPage navigateRoute={navigateRoute} />}
      ></Route>
      <Route
        path="/product/:productId"
        element={
          <ProductPage navigateRoute={navigateRoute} getParams={getParams} />
        }
      ></Route>
      <Route
        path="/orders/:userId"
        element={
          <OrdersPage navigateRoute={navigateRoute} getParams={getParams} />
        }
      ></Route>
      <Route
        path="/cart/:userId"
        element={
          <CartPage navigateRoute={navigateRoute} getParams={getParams} />
        }
      ></Route>
      <Route
        path="/address/:userId"
        element={
          <AddressPage navigateRoute={navigateRoute} getParams={getParams} />
        }
      ></Route>
      <Route
        path="/preview"
        element={<PreviewPage navigateRoute={navigateRoute} />}
      ></Route>
      <Route
        path="/payment"
        element={<PaymentPage navigateRoute={navigateRoute} />}
      ></Route>
      <Route
        path="/wishlist/:userId"
        element={
          <WishlistPage navigateRoute={navigateRoute} getParams={getParams} />
        }
      ></Route>
      <Route
        path="/"
        element={<ProductsPage navigateRoute={navigateRoute} />}
      ></Route>
    </Routes>
  );
};

export default Container;
