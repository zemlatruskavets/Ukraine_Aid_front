import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import moment from 'moment';

import Modal from 'react-modal';
import { ModalStyles } from 'styles/components/Modal';
import DisplayError from 'components/general/ErrorMessage';

import { SINGLE_REPORT_QUERY } from 'graphQL/reports/queries';
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

export default function reportPage({ query }) {
  // get the report
  const { data, loading, error } = useQuery(SINGLE_REPORT_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  console.log('the crime');
  console.log(data);
  const { Crime } = data; // get the destructured data

  // the header
  let header;
  header = <h1>{Crime.title}</h1>;

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
      <MainGrid>
        <Content>
          <Title>{header}</Title>
          <Subtitle>
            <p>{Crime.location}</p>
            <p>{moment(Crime.time).format('LLL')}</p>
            <h2>to do: display witnesses</h2>
            <h2>to do: display photos</h2>
          </Subtitle>
          <Message>{Crime.description && <p>{Crime.description}</p>}</Message>
          <Donate>
            <RedButton>Share</RedButton>
          </Donate>
        </Content>
      </MainGrid>
    </Modal>
  );
}
