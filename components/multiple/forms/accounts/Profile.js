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
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import Dropzone from 'react-dropzone-uploader';
import TextareaAutosize from 'react-textarea-autosize';

// component imports
import DisplayError from 'components/multiple/general/ErrorMessage';
import SelectBox from 'components/multiple/general/SelectBox';

// util imports
import useForm from 'lib/useForm';
import { GetUser } from 'graphQL/accounts/getUser';
import { AccountFields as StateFields } from 'data/stateFields';

// style imports
import 'react-dropzone-uploader/dist/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import DropZoneStyles from 'styles/components/FileUpload';
import {
  MainGrid,
  FormContainer,
  PhotoContainer,
  Photo,
  PhotoName,
  Social,
  FirstName,
  LastName,
  Home,
  Email,
  Message,
  Companions,
  FirstNameInput,
  LastNameInput,
  HomeInput,
  EmailInput,
  CompanionsInput,
  MessageInput,
  Submit,
} from 'styles/components/ProfileForm';

// graphQL imports
import { UPDATE_ACCOUNT as MUTATION_STRING } from 'graphQL/mutations';
import { ALL_OFFERS_QUERY } from 'graphQL/queries';
import { SingleButton } from 'components/single/Buttons';

/* 
  ---------------------
  2. generate the form
  ---------------------
*/

// take in the data from the form and then apply the mutation
export default function NewAccountForm() {
  // get the current user
  const user = GetUser();
  console.log(user);

  // 2.1 define the logic that handles the state changes
  const { inputs, handleChange, clearForm } = useForm(user);

  // 2.2 perform the mutation
  const [updateMutation, { loading, error }] = useMutation(MUTATION_STRING, {
    variables: inputs,
    refetchQueries: [{ query: ALL_OFFERS_QUERY }],
  });

  // define the router
  const router = useRouter();

  // Return the current status of files being uploaded
  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === 'done') {
      console.log(file);
      handleChange(event, file);
    }
  };

  return (
    <MainGrid>
      {/* 2.3 define the onSubmit logic */}
      <FormContainer
        onSubmit={async (e) => {
          alert('triggered');
          e.preventDefault();
          await updateMutation(); // submit the input fields to the backend
          router.push('/');
          clearForm();
        }}>
        <DisplayError error={error} />

        {/* 2.4 define the input fields */}
        <fieldset disabled={loading}>
          <PhotoContainer>
            <Photo>
              <Dropzone
                onChangeStatus={handleChangeStatus}
                accept="image/*,video/*"
                fileWithMeta
                maxFiles={1}
                multiple={false}
                canCancel={false}
                inputContent={(files, extra) =>
                  extra.reject
                    ? 'Only image and video files allowed!'
                    : 'select or drag and drop an image'
                }
                styles={DropZoneStyles}
              />
            </Photo>
            <PhotoName>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
            </PhotoName>
          </PhotoContainer>
          <FirstName>First Name</FirstName>
          <FirstNameInput>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              placeholder="What is your first name?"
              value={inputs.firstName}
              onChange={handleChange}
            />
          </FirstNameInput>
          <LastName>Last Name</LastName>
          <LastNameInput>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              placeholder="What is your last name?"
              value={inputs.lastName}
              onChange={handleChange}
            />
          </LastNameInput>
          <Home>Home</Home>
          <HomeInput>
            <input
              required
              type="text"
              id="home"
              name="home"
              placeholder="Where do you live?"
              value={inputs.home}
              onChange={handleChange}
            />
          </HomeInput>
          <Email>Email</Email>
          <EmailInput>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="What's your email address?"
              value={inputs.email}
              onChange={handleChange}
            />
          </EmailInput>
          {/* <Companions>Companions</Companions>
          <CompanionsInput>
            <SelectBox placeholder="Who are you travelling with?" />
          </CompanionsInput> */}
          <Message>Message</Message>
          <MessageInput>
            <TextareaAutosize
              required
              type="text"
              id="message"
              name="message"
              maxRows={15}
              maxrows="auto"
              placeholder="Write a bit about yourself"
              value={inputs.message}
              onChange={handleChange}
            />
          </MessageInput>
          <Submit>
            <SingleButton type="submit">Update Profile</SingleButton>
          </Submit>
        </fieldset>
      </FormContainer>
    </MainGrid>
  );
}
