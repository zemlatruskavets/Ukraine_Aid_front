import gql from 'graphql-tag';

// authentication queries
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

export { CURRENT_USER_QUERY };
