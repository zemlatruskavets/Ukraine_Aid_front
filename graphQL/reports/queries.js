import gql from 'graphql-tag';

// this is the query returns all of the war crime reports
const ALL_REPORTS_QUERY = gql`
  query ALL_REPORTS_QUERY {
    allCrimes {
      id
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

// this is the query returns all of the war crime reports for a person
const USER_REPORTS_QUERY = gql`
  query USER_REPORTS_QUERY($id: ID!) {
    Person(where: { id: $id }) {
      crimes {
        id
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

const SINGLE_REPORT_QUERY = gql`
  query SINGLE_REPORT_QUERY($id: ID!) {
    Crime(where: { id: $id }) {
      id
      title
      category
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
    }
  }
`;

export { ALL_REPORTS_QUERY, USER_REPORTS_QUERY, SINGLE_REPORT_QUERY };
