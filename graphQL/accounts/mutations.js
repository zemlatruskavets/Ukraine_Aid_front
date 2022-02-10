import gql from 'graphql-tag';

/* 
  1. account mutations
*/

// determine whether user is signed in

// create new account
const UPDATE_ACCOUNT = gql`
  mutation UPDATE_ACCOUNT(
    # variables and types
    $id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $home: String
    $profilePhoto: Upload
    $message: String
  ) {
    updatePerson(
      id: $id
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        home: $home
        profilePhoto: { create: { image: $profilePhoto, altText: $email } }
        message: $message
      }
    ) {
      firstName
      lastName
      email
      home
      message
    }
  }
`;

// signin
const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticatePersonWithPassword(email: $email, password: $password) {
      ... on PersonAuthenticationWithPasswordSuccess {
        item {
          id
          email
        }
      }
      ... on PersonAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

// signout
const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

// send password reset link
const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendPersonPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

// reset the password using the token
const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemPersonPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      code
      message
    }
  }
`;

const MULTIPLE_CREATION = gql`
  mutation {
    createOffers(
      data: [
        {
          data: {
            category: "Transport"
            travelOrigin: "Kyiv"
            travelDestination: "Cairo"
            numberPeople: 4
            message: "leaving soon"
          }
        }
        {
          data: {
            category: "Transport"
            travelOrigin: "Lviv"
            travelDestination: "London"
            numberPeople: 4
            message: "leaving quite soon"
          }
        }
      ]
    ) {
      category
      travelOrigin
      travelDestination
      numberPeople
      message
    }
  }
`;

const CREATE_NEW_ACCOUNT = gql`
  mutation CREATE_NEW_ACCOUNT(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export {
  UPDATE_ACCOUNT,
  SIGNIN_MUTATION,
  SIGN_OUT_MUTATION,
  REQUEST_RESET_MUTATION,
  RESET_MUTATION,
  CREATE_NEW_ACCOUNT,
};
