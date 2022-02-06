/* 
  *************************************************************************
  *************************************************************************

    NAME
    stateFields.js

    SUMMARY
    This file defines the fields to store in state for the various
    forms.

  *************************************************************************
  *************************************************************************
*/

/* 
  1. account fields
*/
const AccountFields = {
  firstName: '',
  lastName: '',
  email: '',
  home: '',
  profilePhoto: '',
};

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

/* 
  3. request state fields
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
  4. war crimes state fields
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

export {
  AccountFields,
  HostOfferFields,
  TransportationOfferFields,
  LivingExpensesRequestFields,
  TransportationExpensesRequestFields,
  WarCrimesReportFields,
};
