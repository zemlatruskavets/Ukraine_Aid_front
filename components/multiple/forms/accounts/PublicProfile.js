/* 
  *************************************************************************
  *************************************************************************

    NAME
    NewAccount.js

    SUMMARY
    This file defines the form used for users to add their personal
    information.

    FLOW
    1. import libraries
    2. generate the form
      2.1 define the logic to handle state changes
      2.2 create the function that will perform the graphQL mutation
      2.3 define the onSubmit logic
      2.4 define the input fields


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
import { useRouter } from 'next/router';

// component imports
import DisplayError from 'components/multiple/general/ErrorMessage';

// util imports

// style imports
import { CircularImage } from 'components/single/Images';
import {
  MainGrid,
  MainContainer,
  PhotoContainer,
  Photo,
  PhotoName,
  Social,
  FirstName,
  LastName,
  Home,
  Email,
  Message,
  FirstNameInput,
  LastNameInput,
  HomeInput,
  EmailInput,
  MessageInput,
} from 'styles/components/PublicProfile';

// graphQL imports
import { SINGLE_USER_QUERY } from 'graphQL/queries';
import { SingleButton } from 'components/single/Buttons';

/* 
  ---------------------
  2. generate the form
  ---------------------
*/

// take in the data from the form and then apply the mutation
export default function PublicProfile({ id }) {
  // 2.2 perform the mutation
  const { data, error, loading } = useQuery(SINGLE_USER_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;

  const { Person } = data;
  console.log(Person);

  return (
    <MainGrid>
      <MainContainer>
        <PhotoContainer>
          <Photo>
            <CircularImage
              image={Person.profilePhoto.image.publicUrlTransformed}
            />
          </Photo>
          <PhotoName>
            <p>
              {Person.firstName} {Person.lastName}
            </p>
          </PhotoName>
        </PhotoContainer>
        <FirstName>First Name</FirstName>
        <FirstNameInput>{Person.firstName}</FirstNameInput>
        <LastName>Last Name</LastName>
        <LastNameInput>{Person.lasttName}</LastNameInput>
        <Home>Home</Home>
        <HomeInput>{Person.home}</HomeInput>
        <Email>Email</Email>
        <EmailInput>{Person.email}</EmailInput>
        <Message>Message</Message>
        <MessageInput>{Person.message}</MessageInput>
      </MainContainer>
    </MainGrid>
  );
}
