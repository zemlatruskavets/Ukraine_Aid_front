import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Modal from 'react-modal';

import DisplayError from 'components/general/ErrorMessage';
import ViewHostingOffer from 'components/pages/offers/displaySingle/Hosting';
import ViewTransportOffer from 'components/pages/offers/displaySingle/Transport';
import ViewMealOffer from 'components/pages/offers/displaySingle/Meal';
import ViewEquipmentOffer from 'components/pages/offers/displaySingle/Equipment';

import { SINGLE_OFFER_QUERY } from 'graphQL/offers/queries';

import { ModalStyles } from 'styles/components/Modal';

export default function offerPage({ query }) {
  // get the offer
  const { data, loading, error } = useQuery(SINGLE_OFFER_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { Offer } = data; // get the destructured data

  const getComponent = (category) => {
    switch (category) {
      case 'Transport':
        return <ViewTransportOffer Offer={Offer} />;
      case 'Hosting':
        return <ViewHostingOffer Offer={Offer} />;
      case 'Meal':
        return <ViewMealOffer Offer={Offer} />;
      case 'Equipment':
        return <ViewEquipmentOffer Offer={Offer} />;
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
      contentLabel="offer-modal"
      style={ModalStyles}>
      {getComponent(Offer.category)}
    </Modal>
  );
}
