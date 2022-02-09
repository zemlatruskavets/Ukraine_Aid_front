/* 
  *************************************************************************
  *************************************************************************
    NAME
    createInteraction.js
    SUMMARY
    This file defines the form used to add new offers and requests.
    FLOW
    1. import libraries
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
import Router from 'next/router';

// component imports
import DisplayError from 'components/multiple/general/ErrorMessage';

// util imports
import useForm from 'lib/useForm';

// style imports
import { MainGrid, Form } from 'styles/components/Form';

// take in the data from the form and then apply the mutation
export default function CreateTransaction({
  type,
  stateFields,
  mutationString,
  queryString,
}) {
  // define the logic that handles the state changes
  const { inputs, handleChange, handleDateChange, clearForm, resetForm } =
    useForm(stateFields);

  // perform the mutation
  const [createMutation, { loading, error, data }] = useMutation(
    mutationString,
    {
      variables: inputs,
      refetchQueries: [{ query: queryString }],
    }
  );

  // put all props into object
  const functionParams = {
    loading: { loading },
    inputs: { inputs },
    handleChange: { handleChange },
    handleDateChange: { handleDateChange },
  };

  // select form to render based on type
  let formType;
  if (type === 'Account') {
    formType = (
      <PersonForm
        loading={loading}
        inputs={inputs}
        handleChange={handleChange}
        handleDateChange={handleDateChange}
      />
    );
  }

  return (
    <MainGrid>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await createMutation(); // submit the input fields to the backend
          clearForm();
          Router.push('/');
        }}>
        <DisplayError error={error} />
        {formType}
      </Form>
    </MainGrid>
  );
}
