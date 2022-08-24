import { css } from '@emotion/react';
import Layout from '../../components/layout';
import Product from '../../components/product';
// import { useRouter } from 'next/router';

const layoutStyle = css`
  background-color: #fff;
`;

const ProductPage = ({ navigateRoute, getParams }) => {
  // const router = useRouter();
  const { productId } = getParams();
  return (
    <Layout layoutStyle={layoutStyle}>
      <Product navigateRoute={navigateRoute} productId={productId} />
    </Layout>
  );
};

export default ProductPage;
