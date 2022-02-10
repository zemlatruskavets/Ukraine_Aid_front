import gql from 'graphql-tag';

// this is the query returns all of the requests
const ALL_REQUESTS_QUERY = gql`
  query ALL_REQUESTS_QUERY {
    allRequests {
      id
      category
      message
      travelOrigin
      travelDestination
      hostLocation
      numberPeople
      amount
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

// this gives all of the requests by a user
const SINGLE_REQUEST_QUERY = gql`
  query SINGLE_REQUEST_QUERY($id: ID!) {
    Request(where: { id: $id }) {
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

// this gives the user information along with their requests
const SINGLE_USER_REQUEST_AND_INFO = gql`
  query SINGLE_USER_REQUEST($id: ID!) {
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
      requests {
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

export {
  ALL_REQUESTS_QUERY,
  SINGLE_REQUEST_QUERY,
  SINGLE_USER_REQUEST_AND_INFO,
};
