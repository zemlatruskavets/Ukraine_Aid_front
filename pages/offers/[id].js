import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import Modal from 'react-modal';
import { ModalStyles } from 'styles/components/Modal';
import DisplayError from 'components/general/ErrorMessage';

import { SINGLE_OFFER_QUERY } from 'graphQL/offers/queries';
import { UploadPreview } from 'components/single/Images';

import { RedButton, SingleButton } from 'components/single/Buttons';

import {
  MainGrid,
  SideBar,
  Photo,
  PhotoName,
  VisitProfile,
  Content,
  Title,
  Subtitle,
  Message,
  Donate,
} from 'styles/pages/IndividualTransaction';

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

  // the header
  let header;
  if (Offer.category === 'Transport') {
    header = (
      <h1>
        Travel from {Offer.travelOrigin} to {Offer.travelDestination}
      </h1>
    );
  } else if (Offer.category === 'Hosting') {
    header = <h1>A Place in {Offer.hostLocation}</h1>;
  } else if (Offer.category === 'Meal') {
    header = <h1>A Meal in {Offer.hostLocation}</h1>;
  } else if (Offer.category === 'Equipment') {
    header = <h1>{Offer.message}</h1>;
  } else if (Offer.category === 'Other') {
    header = <h1>Other offer</h1>;
  }

  const router = useRouter();

  const lastName = Offer.person.lastName.charAt(0);

  // useEffect(() => {
  //   router.prefetch('/');
  // }, []);

  return (
    <Modal
      isOpen // The modal should always be shown on page load, it is the 'page'
      onRequestClose={() => router.back()}
      contentLabel="offer-modal"
      style={ModalStyles}>
      <MainGrid>
        <SideBar>
          <Photo>
            <UploadPreview
              image={Offer.person?.profilePhoto?.image.publicUrlTransformed}
            />
            {Offer.person?.firstName} {lastName}.
            <VisitProfile>
              <Link href={`/accounts/${Offer.person?.id}`}>
                <SingleButton>View Profile</SingleButton>
              </Link>
            </VisitProfile>
          </Photo>
          <PhotoName></PhotoName>
          <VisitProfile></VisitProfile>
        </SideBar>
        <Content>
          <Title>{header}</Title>
          <Subtitle>
            {Offer.numberPeople && <p>{Offer.numberPeople}</p>}
          </Subtitle>
          <Message>{Offer.message && <p>{Offer.message}</p>}</Message>
          <Donate>
            <RedButton>Contact</RedButton>
          </Donate>
        </Content>
      </MainGrid>
    </Modal>
  );
}
