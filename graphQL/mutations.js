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

/* 
  2. request mutations
*/
const CREATE_TRANSPORT_REQUEST = gql`
  mutation CREATE_TRANSPORT_REQUEST(
    # variables and types
    $category: String!
    $travelOrigin: String!
    $travelDestination: String!
    $numberPeople: Int!
    $amount: Int!
    $message: String
    $person: ID!
  ) {
    createRequest(
      data: {
        category: $category
        travelOrigin: $travelOrigin
        travelDestination: $travelDestination
        numberPeople: $numberPeople
        amount: $amount
        message: $message
        person: { connect: { id: $person } }
      }
    ) {
      category
      travelOrigin
      travelDestination
      amount
      numberPeople
      message
      person {
        id
      }
    }
  }
`;

const CREATE_LIVING_EXPENSES_REQUEST = gql`
  mutation CREATE_LIVING_EXPENSES_REQUEST(
    # variables and types
    $category: String!
    $hostLocation: String!
    $startDate: String!
    $endDate: String!
    $numberPeople: Int!
    $amount: Int!
    $message: String
    $person: ID!
  ) {
    createRequest(
      data: {
        category: $category
        hostLocation: $hostLocation
        startDate: $startDate
        endDate: $endDate
        numberPeople: $numberPeople
        amount: $amount
        message: $message
        person: { connect: { id: $person } }
      }
    ) {
      category
      hostLocation
      startDate
      endDate
      numberPeople
      amount
      message
    }
  }
`;

/* 
  3. offer mutations
*/
const CREATE_TRANSPORT_OFFER = gql`
  mutation CREATE_TRANSPORT_OFFER(
    # variables and types
    $category: String!
    $travelOrigin: String!
    $travelDestination: String!
    $time: String!
    $numberPeople: Int!
    $message: String
    $person: ID!
  ) {
    createOffer(
      data: {
        category: $category
        travelOrigin: $travelOrigin
        travelDestination: $travelDestination
        time: $time
        numberPeople: $numberPeople
        message: $message
        person: { connect: { id: $person } }
      }
    ) {
      category
      travelOrigin
      travelDestination
      time
      numberPeople
      message
    }
  }
`;

const CREATE_HOSTING_OFFER = gql`
  mutation CREATE_HOSTING_OFFER(
    # variables and types
    $category: String!
    $hostLocation: String!
    $startDate: String!
    $endDate: String!
    $numberPeople: Int!
    $message: String
    $person: ID!
  ) {
    createOffer(
      data: {
        category: $category
        hostLocation: $hostLocation
        startDate: $startDate
        endDate: $endDate
        numberPeople: $numberPeople
        message: $message
        person: { connect: { id: $person } }
      }
    ) {
      category
      hostLocation
      startDate
      endDate
      numberPeople
      message
    }
  }
`;

/* 
  5. war crimes report mutations
*/
const CREATE_WAR_CRIMES_REPORT = gql`
  mutation CREATE_WAR_CRIMES_REPORT(
    # variables and types
    $title: String!
    $location: String!
    $time: String!
    $witnesses: [PersonWhereUniqueInput]
    $evidence: [PictureCreateInput]
    $description: String!
    $person: ID!
  ) {
    createCrime(
      data: {
        title: $title
        location: $location
        time: $time
        witnesses: { connect: $witnesses }
        evidence: { create: $evidence }
        description: $description
        person: { connect: { id: $person } }
      }
    ) {
      title
      location
      time
      description
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
  CREATE_TRANSPORT_REQUEST,
  CREATE_LIVING_EXPENSES_REQUEST,
  CREATE_TRANSPORT_OFFER,
  CREATE_HOSTING_OFFER,
  CREATE_WAR_CRIMES_REPORT,
  CREATE_NEW_ACCOUNT,
};
