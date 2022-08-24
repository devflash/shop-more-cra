import React from 'react';
import { css } from '@emotion/react';
import Layout from '../../components/layout';
import WishlistComp from '../../components/wishlist';

const customLayout = css`
  min-height: calc(100vh - 62px);
  padding-top: 30px;
  padding-bottom: 30px;
  height: auto;
`;

const Wishlist = ({ navigateRoute, getParams }) => {
  const { userId } = getParams();
  return (
    <Layout layoutStyle={customLayout}>
      <WishlistComp navigateRoute={navigateRoute} userId={userId} />
    </Layout>
  );
};

// export const getServerSideProps = async (context) => {
//   console.log('Server side props');
//   let wishlist = [];
//   const {
//     params: { userId },
//   } = context;
//   const cookies = nookies.get(context);
//   console.log('cookies', cookies);
//   const response = await fetch(`http://localhost:3000/api/verifyAuth`, {
//     method: 'POST',
//     body: JSON.stringify({ cookies }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   const data = await response.json();
//   const { uid } = data;

//   if (uid) {
//     const collection = await firestore
//       .collection('users')
//       .doc(userId)
//       .collection('wishlist')
//       .get();
//     wishlist = collection.docs.map((wishlist) => {
//       return {
//         ...wishlist.data(),
//       };
//     });
//   } else {
//     const { res } = context;
//     res.setHeader('location', '/signin');
//     res.statusCode = 302;
//     res.end();
//     return;
//   }

//   return {
//     props: {
//       wishlist,
//     },
//   };
// };

export default Wishlist;
