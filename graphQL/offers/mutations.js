import gql from 'graphql-tag';

/* 
  2. offer state fields
*/
const HostOfferFields = {
  category: 'Hosting',
  hostLocation: '',
  startDate: '',
  endDate: '',
  numberPeople: '',
  message: '',
  person: '',
};

const TransportationOfferFields = {
  category: 'Transport',
  travelOrigin: '',
  travelDestination: '',
  time: '',
  numberPeople: '',
  message: '',
  person: '',
};

const MealOfferFields = {
  category: 'Meal',
  hostLocation: '',
  time: '',
  numberPeople: '',
  message: '',
  person: '',
};

const EquipmentOfferFields = {
  category: 'Equipment',
  hostLocation: '',
  time: '',
  message: '',
  person: '',
};

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

const CREATE_MEAL_OFFER = gql`
  mutation CREATE_MEAL_OFFER(
    # variables and types
    $category: String!
    $hostLocation: String!
    $time: String!
    $numberPeople: Int!
    $message: String
    $person: ID!
  ) {
    createOffer(
      data: {
        category: $category
        hostLocation: $hostLocation
        time: $time
        numberPeople: $numberPeople
        message: $message
        person: { connect: { id: $person } }
      }
    ) {
      category
      hostLocation
      time
      numberPeople
      message
    }
  }
`;

const CREATE_EQUIPMENT_OFFER = gql`
  mutation CREATE_EQUIPMENT_OFFER(
    # variables and types
    $category: String!
    $hostLocation: String!
    $time: String!
    $message: String
    $person: ID!
  ) {
    createOffer(
      data: {
        category: $category
        hostLocation: $hostLocation
        time: $time
        message: $message
        person: { connect: { id: $person } }
      }
    ) {
      category
      hostLocation
      time
      message
    }
  }
`;

export {
  HostOfferFields,
  TransportationOfferFields,
  MealOfferFields,
  EquipmentOfferFields,
  CREATE_TRANSPORT_OFFER,
  CREATE_HOSTING_OFFER,
  CREATE_MEAL_OFFER,
  CREATE_EQUIPMENT_OFFER,
};
