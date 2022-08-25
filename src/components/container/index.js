import React, { Suspense } from 'react';
const SignUpPage = React.lazy(() => import('../../pages/signup'));

const SignInPage = React.lazy(() => import('../../pages/signin'));
const ProductPage = React.lazy(() => import('../../pages/product'));
const ProductsPage = React.lazy(() => import('../../pages/index'));
const OrdersPage = React.lazy(() => import('../../pages/orders'));
const CartPage = React.lazy(() => import('../../pages/cart'));
const AddressPage = React.lazy(() => import('../../pages/address'));
const PreviewPage = React.lazy(() => import('../../pages/preview'));
const PaymentPage = React.lazy(() => import('../../pages/payment'));
const WishlistPage = React.lazy(() => import('../../pages/wishlist'));
import Loader from '../common/loader';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';

const Container = () => {
  const navigate = useNavigate();

  const navigateRoute = (path) => {
    navigate(path);
  };

  const getParams = () => useParams();

  return (
    <Suspense fallback={<Loader isLoading={true} isBackdrop={true} />}>
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
    </Suspense>
  );
};

export default Container;
