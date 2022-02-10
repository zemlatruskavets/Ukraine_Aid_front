import { Tabs, TabPanel } from 'react-tabs';
import { StyledTab, StyledTabList } from 'styles/components/Tabs';
import 'react-tabs/style/react-tabs.css';

import NewAccountForm from './Profile';
import ViewOffers from 'pages/offers/viewOffers';
import ViewIndividualRequests from 'components/pages/requests/viewIndividualRequests';
import { GetUser } from 'graphQL/accounts/getUser';

export default function Home() {
  const user = GetUser();

  return (
    <Tabs>
      <StyledTabList>
        <StyledTab>Update Profile</StyledTab>
        <StyledTab>My Offers</StyledTab>
        <StyledTab>My Requests</StyledTab>
      </StyledTabList>

      <TabPanel>
        <NewAccountForm />
      </TabPanel>
      <TabPanel>
        <ViewOffers />
      </TabPanel>
      <TabPanel>
        <ViewIndividualRequests id={user?.id} />
      </TabPanel>
    </Tabs>
  );
}
