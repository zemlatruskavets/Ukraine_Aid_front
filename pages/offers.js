/* 
  *************************************************************************
  *************************************************************************

    NAME
    offers.js

    SUMMARY
    This file defines the page from which a user can browse offers,
    view their own offers, and submit a new one.

    FLOW
    1. import libraries
    2. render the components in separate tabs
      2.1 get the current user for the individual offer tab
      2.2 create the tabs component
      2.3 define the component to be rendered in each tab

  *************************************************************************
  *************************************************************************
*/

/* 
  ---------------------
  1. import statements
  ---------------------
*/
// external libraries
import { Tabs, TabPanel } from 'react-tabs';

// graphQL imports
import { GetUser } from 'graphQL/accounts/getUser';

// component imports
import ViewOffers from 'components/pages/offers/ViewOffers';
import ViewIndividualOffers from 'components/pages/offers/viewIndividualOffers';
import CreateOffer from 'components/pages/offers/CreateOffer';

// style imports
import { StyledTab, StyledTabList } from 'styles/components/Tabs';
import 'react-tabs/style/react-tabs.css';

/* 
  ---------------------
  2. generate the form
  ---------------------
*/
export default function OffersOverview() {
  // get the current user
  // const user = GetUser();
  const userID = '62057ecddb1cdc6960dfca18';

  // render each component in a separate tab
  return (
    <Tabs>
      <StyledTabList>
        <StyledTab>View Offers</StyledTab>
        <StyledTab>My Offers</StyledTab>
        <StyledTab>Create Offer</StyledTab>
      </StyledTabList>

      <TabPanel>
        <ViewOffers />
      </TabPanel>
      <TabPanel>
        <ViewIndividualOffers id={userID} />
      </TabPanel>
      <TabPanel>
        <CreateOffer />
      </TabPanel>
    </Tabs>
  );
}
