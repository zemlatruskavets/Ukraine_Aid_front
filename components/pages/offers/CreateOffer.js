/* 
  *************************************************************************
  *************************************************************************

    NAME
    createOffer.js

    SUMMARY
    This file defines the page where new offers can be submitted.

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
import TransportationOfferForm from 'components/pages/offers/forms/Transportation';
import HostingOfferForm from 'components/pages/offers/forms/Hosting';

// style imports
import { MainGrid, TransitionDiv } from 'styles/components/Accordion';

const VisibleDiv = ({ category }) => {
  // 2. keep track of which component has been selected
  const [isActive, setIsActive] = useState(false);

  // 3. render the form corresponding to the selected option
  function renderSwitch(category) {
    switch (category) {
      case 'transport':
        return (
          <div style={{ display: 'grid', width: '100vw' }}>
            <RedButton onClick={() => setIsActive(!isActive)}>
              I'd like to offer transportation
            </RedButton>
            <TransitionDiv open={isActive}>
              <TransportationOfferForm />
            </TransitionDiv>
          </div>
        );
      case 'hosting':
        return (
          <div style={{ display: 'grid', width: '100vw' }}>
            <RedButton onClick={() => setIsActive(!isActive)}>
              I'd like to offer a place to stay
            </RedButton>
            <TransitionDiv open={isActive}>
              <HostingOfferForm />
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
export default function CreateOffer() {
  return (
    <MainGrid>
      <VisibleDiv category="transport" />
      <VisibleDiv category="hosting" />
    </MainGrid>
  );
}
