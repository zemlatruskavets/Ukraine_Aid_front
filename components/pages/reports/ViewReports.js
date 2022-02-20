/* 
  *************************************************************************
  *************************************************************************

    NAME
    ViewReports.js

    SUMMARY
    This file defines the component that displays all of the war 
    crime reports.
    
    FLOW
    1. import external libraries and content
    2. define the component containing each of the offers

  *************************************************************************
  *************************************************************************
*/

/* 
  ---------------------
  1. import statements
  ---------------------
*/

// external libraries
import { useQuery } from '@apollo/client';
import Link from 'next/link';

// graphQL imports
import { USER_REPORTS_QUERY } from 'graphQL/reports/queries';
import { GetUser } from 'graphQL/accounts/getUser';

// component imports
import DisplayError from 'components/general/ErrorMessage';
import { RedButton } from 'components/single/Buttons';
import { AddPlus } from 'components/single/svgElements';
import Row from 'components/general/CrimeRow';

// style imports
import {
  MainGrid,
  Title,
  Filter,
  Exchanges,
  AddButtonContainer,
} from 'styles/pages/Exchange';

/* 
  ------------------------
  2. define the component
  ------------------------
*/
export default function ViewReports() {
  // load the data
  const user = GetUser();
  // const id = user?.id;
  const id = '62057ecddb1cdc6960dfca18';
  const { data, error, loading } = useQuery(USER_REPORTS_QUERY, {
    variables: { id },
  });

  if (loading) return <h1>Loading...</h1>;
  if (error) return <DisplayError />;

  // store the requests array as the variable personalRequests
  const {
    Person: { crimes: personalReports },
  } = data;

  // render each offer in its own container
  return (
    <MainGrid>
      <Title>
        <h1>View Reports</h1>
        <p>these are all of the war crime reports you've prepared</p>
      </Title>
      <Filter>
        <RedButton>filter results</RedButton>
      </Filter>
      <Exchanges>
        {personalReports.map((item) => (
          <Row data={item} />
        ))}
        <Link href="/reports/createReport">
          <AddButtonContainer>
            <AddPlus colour="#707070"></AddPlus>
            <p>new report</p>
          </AddButtonContainer>
        </Link>
      </Exchanges>
    </MainGrid>
  );
}
