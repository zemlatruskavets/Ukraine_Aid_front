/* 
  *************************************************************************
  *************************************************************************

    NAME
    requests.js

    SUMMARY
    This file defines the page from which a user can browse requests,
    view their own requests, and submit a new one.

    FLOW
    1. import libraries
    2. render the components in separate tabs
      2.1 get the current user for the individual requests tab
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
import ViewRequests from 'components/pages/requests/ViewRequests';
import ViewIndividualRequests from 'components/pages/requests/viewIndividualRequests';
import CreateRequest from 'components/pages/requests/CreateRequest';

// style imports
import { StyledTab, StyledTabList } from 'styles/components/Tabs';
import 'react-tabs/style/react-tabs.css';

/* 
  ---------------------
  2. generate the form
  ---------------------
*/
export default function RequestsOverview() {
  // get the current user
  const user = GetUser();
  const userID = '62057ecddb1cdc6960dfca18';

  // render each component in a separate tab
  return (
    <Tabs>
      <StyledTabList>
        <StyledTab>View Requests</StyledTab>
        <StyledTab>My Requests</StyledTab>
        <StyledTab>Create Request</StyledTab>
      </StyledTabList>

      <TabPanel>
        <ViewRequests />
      </TabPanel>
      <TabPanel>
        <ViewIndividualRequests id={userID} />
      </TabPanel>
      <TabPanel>
        <CreateRequest />
      </TabPanel>
    </Tabs>
  );
}
