import React from 'react';
import Layout from '../components/layout';
import Products from '../components/products';

export default function Home({ navigateRoute }) {
  return (
    <div>
      <Layout>{<Products navigateRoute={navigateRoute} />}</Layout>
    </div>
  );
}
