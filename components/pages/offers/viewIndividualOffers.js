import { useQuery } from '@apollo/client';
import Link from 'next/link';

import { SINGLE_USER_OFFER_AND_INFO } from 'graphQL/offers/queries';

import {
  MainGrid,
  Title,
  Filter,
  Exchanges,
  AddButtonContainer,
} from 'styles/pages/Exchange';
import { AddPlus } from 'components/single/svgElements';
import Row from 'components/general/OfferRow';
import { RedButton } from 'components/single/Buttons';

export default function ViewIndividualOffers({ id }) {
  const { data, error, loading } = useQuery(SINGLE_USER_OFFER_AND_INFO, {
    variables: { id },
  });

  if (loading) return <h1>Loading...</h1>;

  // store the offers array as the variable personalOffers
  const {
    Person: { offers: personalOffers },
  } = data;

  // store the personal information of the user in the variable person
  const {
    allPeople: { 0: person },
  } = data;

  return (
    <MainGrid>
      <Title>
        <h1>My Offers</h1>
        <p>these are the offers that you've made</p>
      </Title>
      <Filter>
        <RedButton>filter results</RedButton>
      </Filter>
      <Exchanges>
        {personalOffers.map((item) => (
          <Row data={item} person={person} />
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
