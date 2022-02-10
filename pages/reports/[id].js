import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Link from 'next/link';

import Modal from 'react-modal';
import { ModalStyles } from 'styles/components/Modal';
import DisplayError from 'components/general/ErrorMessage';

import { USER_REPORTS_QUERY } from 'graphQL/reports/queries';
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

export default function reportPage(query) {
  // get the report
  const { data, loading, error } = useQuery(USER_REPORTS_QUERY, {
    variables: {
      id: query.id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { Crime } = data; // get the destructured data

  // the header
  let header;
  header = <h1>{Crime.title}</h1>;

  const router = useRouter();

  const lastName = Crime.person.lastName.charAt(0);

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
              image={Crime.person?.profilePhoto?.image.publicUrlTransformed}
            />
            {Crime.person?.firstName} {lastName}.
            <VisitProfile>
              <Link href={`/accounts/${Crime.person?.id}`}>
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
            <p>{Crime.location}</p>
            <p>{Crime.time}</p>
          </Subtitle>
          <Message>{Crime.description && <p>{Crime.description}</p>}</Message>
          <Donate>
            <RedButton>Donate</RedButton>
          </Donate>
        </Content>
      </MainGrid>
    </Modal>
  );
}
