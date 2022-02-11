import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Modal from 'react-modal';

import DisplayError from 'components/general/ErrorMessage';
import ViewHostingRequest from 'components/pages/requests/displaySingle/Living';
import ViewTransportRequest from 'components/pages/requests/displaySingle/Transportation';

import { SINGLE_REQUEST_QUERY } from 'graphQL/requests/queries';

import { ModalStyles } from 'styles/components/Modal';

export default function requestPage({ query }) {
  // get the request
  const { data, loading, error } = useQuery(SINGLE_REQUEST_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { Request } = data; // get the destructured data

  const getComponent = (category) => {
    switch (category) {
      case 'Travel':
        return <ViewTransportRequest Request={Request} />;
      case 'Living':
        return <ViewHostingRequest Request={Request} />;
    }
  };

  const router = useRouter();

  // useEffect(() => {
  //   router.prefetch('/');
  // }, []);

  return (
    <Modal
      isOpen // The modal should always be shown on page load, it is the 'page'
      onRequestClose={() => router.back()}
      contentLabel="request-modal"
      style={ModalStyles}>
      {getComponent(Request.category)}
    </Modal>
  );
}
