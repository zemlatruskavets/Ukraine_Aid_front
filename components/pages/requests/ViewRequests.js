/* 
  *************************************************************************
  *************************************************************************

    NAME
    ViewRequests.js

    SUMMARY
    This file defines the component that displays all of the requests.

    FLOW
    1. import external libraries and content
    2. define the component containing each of the requests

  *************************************************************************
  *************************************************************************
*/

/* 
  ---------------------
  1. import statements
  ---------------------
*/

// external libraries
import { useQuery } from '@apollo/client';
import Link from 'next/link';

// graphQL imports
import { ALL_REQUESTS_QUERY as QUERY } from 'graphQL/requests/queries';

// component imports
import DisplayError from 'components/multiple/general/ErrorMessage';
import Row from 'components/multiple/general/RequestRow';
import { AddPlus } from 'components/single/svgElements';
import { RedButton } from 'components/single/Buttons';

// style imports
import {
  MainGrid,
  Title,
  Filter,
  Exchanges,
  AddButtonContainer,
} from 'styles/pages/Exchange';

/* 
  ------------------------
  2. define the component
  ------------------------
*/
export default function ViewRequests() {
  // load the data
  const { data, error, loading } = useQuery(QUERY);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <DisplayError />;

  // render each offer in its own container
  return (
    <MainGrid>
      <Title>
        <h1>View Requests</h1>
        <p>these are the requests from people fleeing the war</p>
      </Title>
      <Filter>
        <RedButton>filter results</RedButton>
      </Filter>
      <Exchanges>
        {data.allRequests.map((item) => (
          <Row data={item} />
        ))}
        <Link href="/offers/createOffer">
          <AddButtonContainer>
            <AddPlus colour="#707070"></AddPlus>
            <p>add offer</p>
          </AddButtonContainer>
        </Link>
      </Exchanges>
    </MainGrid>
  );
}
