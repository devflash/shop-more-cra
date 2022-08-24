import { css } from '@emotion/react';
import Layout from '../../components/layout';
import CartItems from '../../components/cartItems';

const customLayout = css`
  height: calc(100vh - 78px);
  padding: 10px;
`;

const Cart = ({ navigateRoute, getParams }) => {
  const { userId } = getParams();
  return (
    <Layout layoutStyle={customLayout}>
      <CartItems navigateRoute={navigateRoute} userId={userId} />
    </Layout>
  );
};

export default Cart;
