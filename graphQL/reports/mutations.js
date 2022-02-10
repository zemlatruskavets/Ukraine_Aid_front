import gql from 'graphql-tag';

/* 
  1. war crimes state fields
*/
const WarCrimesReportFields = {
  category: 'Report',
  title: '',
  location: '',
  time: '',
  witnesses: '',
  evidence: '',
  description: '',
  person: '',
};

/* 
  2. war crimes report mutations
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

export { WarCrimesReportFields, CREATE_WAR_CRIMES_REPORT };
