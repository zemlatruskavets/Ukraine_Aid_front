import gql from 'graphql-tag';

/* 
  1. authentication-related queries
*/

// this is the query returns all users
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

// this returns the data for a single user
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

// this returns the data for the logged-in user
const CURRENT_USER_QUERY = gql`
  query {
    authenticatedItem {
      ... on Person {
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

export { ALL_USERS_QUERY, SINGLE_USER_QUERY, CURRENT_USER_QUERY };
