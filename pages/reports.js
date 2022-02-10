/* 
  *************************************************************************
  *************************************************************************

    NAME
    reports.js

    SUMMARY
    This file defines the page from which a user can browse reports,
    view their own reports, and submit a new one.

    FLOW
    1. import libraries
    2. render the components in separate tabs
      2.1 get the current user for the individual reports tab
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
import ViewReports from 'components/pages/reports/ViewReports';
import CreateReport from 'components/pages/reports/CreateReport';

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

  // render each component in a separate tab
  return (
    <Tabs>
      <StyledTabList>
        <StyledTab>My Reports</StyledTab>
        <StyledTab>Create Report</StyledTab>
      </StyledTabList>

      <TabPanel>
        <ViewReports />
      </TabPanel>
      <TabPanel>
        <CreateReport />
      </TabPanel>
    </Tabs>
  );
}
