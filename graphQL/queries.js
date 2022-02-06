import gql from 'graphql-tag';

// this is the query returns all of the offers
const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    allPeople {
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
`;

// this is the query returns all of the offers
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

// this is the query returns all of the war crime reports
const ALL_REPORTS_QUERY = gql`
  query ALL_REPORTS_QUERY {
    allCrimes {
      title
      location
      time
      description
      witnesses {
        id
        email
      }
      evidence {
        image {
          publicUrlTransformed
        }
      }
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

// this is the query returns all of the war crime reports
const USER_REPORTS_QUERY = gql`
  query USER_REPORTS_QUERY($id: ID!) {
    Person(where: { id: $id }) {
      crimes {
        title
        category
        location
        time
        description
        witnesses {
          id
          email
        }
        person {
          id
          firstName
          lastName
          profilePhoto {
            altText
            image {
              publicUrlTransformed
            }
          }
        }
        evidence {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

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

// authentication queries
const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!) {
    Person(where: { id: $id }) {
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
`;
const SINGLE_USER_REQUEST = gql`
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
  ALL_USERS_QUERY,
  ALL_OFFERS_QUERY,
  ALL_REQUESTS_QUERY,
  ALL_REPORTS_QUERY,
  SINGLE_USER_QUERY,
  SINGLE_REQUEST_QUERY,
  SINGLE_USER_REQUEST,
  USER_REPORTS_QUERY,
};
