/* 
  *************************************************************************
  *************************************************************************

    NAME
    ViewOffers.js

    SUMMARY
    This file defines the component that displays all of the offers.
    
    FLOW
    1. import external libraries and content
    2. define the component containing each of the offers

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
import { ALL_OFFERS_QUERY as QUERY } from 'graphQL/offers/queries';

// component imports
import DisplayError from 'components/general/ErrorMessage';
import Row from 'components/general/OfferRow';
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
export default function ViewOffers() {
  // load the data
  const { data, error, loading } = useQuery(QUERY);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <DisplayError />;

  // render each offer in its own container
  return (
    <MainGrid>
      <Filter>
        <RedButton>filter results</RedButton>
      </Filter>
      <Title>
        <h1>View Offers</h1>
        <p>these are the offers from people wanting to help</p>
      </Title>
      <Exchanges>
        {data.allOffers.map((item) => (
          <Row data={item} />
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
