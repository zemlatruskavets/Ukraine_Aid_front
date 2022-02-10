import gql from 'graphql-tag';

const ALL_OFFERS_QUERY = gql`
  query ALL_OFFERS_QUERY {
    allOffers {
      id
      category
      travelOrigin
      travelDestination
      hostLocation
      numberPeople
      amount
      message
      person {
        id
        email
        firstName
        lastName
        profilePhoto {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const SINGLE_OFFER_QUERY = gql`
  query SINGLE_OFFER_QUERY($id: ID!) {
    Offer(where: { id: $id }) {
      id
      category
      travelOrigin
      travelDestination
      hostLocation
      amount
      message
      numberPeople
      person {
        id
        email
        firstName
        lastName
        profilePhoto {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

// this gives the user information along with their offers
const SINGLE_USER_OFFER_AND_INFO = gql`
  query SINGLE_USER_OFFER($id: ID!) {
    allPeople(where: { id: $id }) {
      id
      email
      firstName
      lastName
      profilePhoto {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
    Person(where: { id: $id }) {
      offers {
        id
        category
        travelOrigin
        travelDestination
        hostLocation
        amount
        message
        numberPeople
      }
    }
  }
`;

export { ALL_OFFERS_QUERY, SINGLE_OFFER_QUERY, SINGLE_USER_OFFER_AND_INFO };
