import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import Modal from 'react-modal';
import { ModalStyles } from 'styles/components/Modal';
import DisplayError from 'components/general/ErrorMessage';

import { SINGLE_REQUEST_QUERY } from 'graphQL/requests/queries';
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

export default function requestPage({ query }) {
  console.log('in here');
  console.log(query);

  // get the request
  const { data, loading, error } = useQuery(SINGLE_REQUEST_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { Request } = data; // get the destructured data

  // the header
  let header;
  if (Request.category === 'Travel') {
    header = (
      <h1>
        Travel from {Request.travelOrigin} to {Request.travelDestination}
      </h1>
    );
  } else if (Request.category === 'Living') {
    header = <h1>Living Expenses in {Request.hostLocation}</h1>;
  } else if (Request.category === 'Other') {
    header = <h1>Other request</h1>;
  }

  const router = useRouter();

  const lastName = Request.person.lastName.charAt(0);

  // useEffect(() => {
  //   router.prefetch('/');
  // }, []);

  return (
    <Modal
      isOpen // The modal should always be shown on page load, it is the 'page'
      onRequestClose={() => router.back()}
      contentLabel="request-modal"
      style={ModalStyles}>
      <MainGrid>
        <SideBar>
          <Photo>
            <UploadPreview
              image={Request.person?.profilePhoto?.image.publicUrlTransformed}
            />
            {Request.person?.firstName} {lastName}.
            <VisitProfile>
              <Link href={`/accounts/${Request.person?.id}`}>
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
            <p>{Request.numberPeople} people</p>
            {Request.amount && <p>₴{Request.amount}</p>}
          </Subtitle>
          <Message>{Request.message && <p>{Request.message}</p>}</Message>
          <Donate>
            <RedButton>Donate</RedButton>
          </Donate>
        </Content>
      </MainGrid>
    </Modal>
  );
}
