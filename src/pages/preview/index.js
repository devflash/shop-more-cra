import { css } from '@emotion/react';
import Layout from '../../components/layout';
import PreviewComp from '../../components/preview';

const layoutStyle = css`
  min-height: calc(100vh - 62px);
  padding-top: 30px;
`;

const Preview = ({ navigateRoute }) => (
  <Layout layoutStyle={layoutStyle}>
    <PreviewComp navigateRoute={navigateRoute} />
  </Layout>
);

export default Preview;
