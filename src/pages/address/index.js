import { css } from '@emotion/react';
import Layout from '../../components/layout';
import OrderAddress from '../../components/OrderAddress';

const customLayout = css`
  min-height: calc(100vh - 78px);
  padding: 10px;
`;

const Address = ({ navigateRoute, getParams }) => {
  const { userId } = getParams();
  return (
    <Layout layoutStyle={customLayout}>
      <OrderAddress navigateRoute={navigateRoute} userId={userId} />
    </Layout>
  );
};

export default Address;
