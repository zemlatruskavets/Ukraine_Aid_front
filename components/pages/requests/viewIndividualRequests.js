import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { SINGLE_USER_REQUEST } from 'graphQL/queries';

import {
  MainGrid,
  Title,
  Filter,
  Exchanges,
  AddButtonContainer,
} from 'styles/pages/Exchange';
import { AddPlus } from 'components/single/svgElements';
import Row from 'components/multiple/general/Row';
import { RedButton } from 'components/single/Buttons';

export default function ViewIndividualRequests({ id }) {
  const { data, error, loading } = useQuery(SINGLE_USER_REQUEST, {
    variables: { id },
  });

  if (loading) return <h1>Loading...</h1>;

  // store the requests array as the variable personalRequests
  const {
    Person: { requests: personalRequests },
  } = data;

  // store the personal information of the user in the variable person
  const {
    allPeople: { 0: person },
  } = data;

  return (
    <MainGrid>
      <Title>
        <h1>My Requests</h1>
        <p>these are the requests that you've made</p>
      </Title>
      <Filter>
        <RedButton>filter results</RedButton>
      </Filter>
      <Exchanges>
        {personalRequests.map((item) => (
          <Row data={item} person={person} />
        ))}
        <Link href="/requests/createRequest">
          <AddButtonContainer>
            <AddPlus colour="#707070"></AddPlus>
            <p>add request</p>
          </AddButtonContainer>
        </Link>
      </Exchanges>
    </MainGrid>
  );
}
