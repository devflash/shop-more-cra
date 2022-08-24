import React from 'react';
import { css } from '@emotion/react';
import Layout from '../../components/layout';
import SignUp from '../../components/signUp';
const customLayout = css`
  height: calc(100vh - 62px);
`;

const Signup = ({ navigateRoute }) => (
  <Layout layoutStyle={customLayout}>
    <SignUp navigateRoute={navigateRoute} />
  </Layout>
);

export default Signup;
