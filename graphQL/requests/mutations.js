import gql from 'graphql-tag';

/* 
  1. request state fields
*/
const LivingExpensesRequestFields = {
  category: 'Living',
  hostLocation: '',
  startDate: '',
  endDate: '',
  amount: '',
  numberPeople: '',
  message: '',
  person: '',
};

const TransportationExpensesRequestFields = {
  category: 'Travel',
  travelOrigin: '',
  travelDestination: '',
  amount: '',
  numberPeople: '',
  message: '',
  person: '',
};

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

export {
  LivingExpensesRequestFields,
  TransportationExpensesRequestFields,
  CREATE_TRANSPORT_REQUEST,
  CREATE_LIVING_EXPENSES_REQUEST,
};
