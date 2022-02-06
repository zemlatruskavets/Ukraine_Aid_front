/* 
  *************************************************************************
  *************************************************************************

    NAME
    createRequest.js

    SUMMARY
    This file defines the page where new requests can be submitted.

    FLOW
    1. import libraries
    2. define the component that determines which option has been selected
    3. render the form corresponding to the selected option
    4. show the different options


  *************************************************************************
  *************************************************************************
*/

/* 
  ---------------------
  1. import statements
  ---------------------
*/

// external libraries
import { useState } from 'react';

// component imports
import { RedButton } from 'components/single/Buttons';
import LivingExpensesForm from 'components/pages/requests/forms/LivingExpenses';
import TravelExpensesForm from 'components/pages/requests/forms/TravelExpenses';

// style imports
import { MainGrid, TransitionDiv } from 'styles/components/Accordion';

const VisibleDiv = ({ category }) => {
  // 2. keep track of which component has been selected
  const [isActive, setIsActive] = useState(false);

  // 3. render the form corresponding to the selected option
  function renderSwitch(category) {
    switch (category) {
      case 'travel':
        return (
          <div style={{ display: 'grid', width: '100vw' }}>
            <RedButton onClick={() => setIsActive(!isActive)}>
              I need money for travel expenses
            </RedButton>
            <TransitionDiv open={isActive}>
              <TravelExpensesForm />
            </TransitionDiv>
          </div>
        );
      case 'living':
        return (
          <div style={{ display: 'grid', width: '100vw' }}>
            <RedButton onClick={() => setIsActive(!isActive)}>
              I need money for living expenses
            </RedButton>
            <TransitionDiv open={isActive}>
              <LivingExpensesForm />
            </TransitionDiv>
          </div>
        );
      default:
        return null;
    }
  }

  return renderSwitch(category);
};

// 4. show the different options
export default function createRequest() {
  return (
    <MainGrid>
      <VisibleDiv category="travel" />
      <VisibleDiv category="living" />
    </MainGrid>
  );
}
