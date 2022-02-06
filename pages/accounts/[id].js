import { useEffect } from 'react';

import Modal from 'react-modal';
import { ModalStyles } from 'styles/components/Modal';
import PublicProfile from 'components/multiple/forms/accounts/PublicProfile';

const requestPage = ({ query }) => {
  return (
    <div style={{ display: 'grid', justifyContent: 'center' }}>
      <PublicProfile id={query.id} />
    </div>
  );
};

export default requestPage;

// // this tells next to pre-render these pages at build
// export function getStaticProps({ params: { query } }) {
//   console.log('####');
//   console.log(query);
//   return { props: { query } };
// }

// // this allows next to figure out how many paths to pre-render
// const data = ['1', '2', '3', '4'];
// export function getStaticPaths() {
//   return {
//     paths: data.map((query) => ({
//       params: {
//         id: query.toString(),
//       },
//     })),
//     fallback: false,
//   };
// }
