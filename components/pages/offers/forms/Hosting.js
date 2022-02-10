/* 
  *************************************************************************
  *************************************************************************

    NAME
    Hosting.js

    SUMMARY
    This file defines the form used to add a new hosting offer.

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
import DatePicker from 'react-datepicker';
import TextareaAutosize from 'react-textarea-autosize';

// component imports
import DisplayError from 'components/general/ErrorMessage';

// util imports
import useForm from 'lib/useForm';
import { HostOfferFields as StateFields } from 'graphQL/offers/mutations';

// style imports
import 'react-datepicker/dist/react-datepicker.css';
import { MainGrid, Form } from 'styles/components/Form';

// graphQL imports
import { CREATE_HOSTING_OFFER as MUTATION_STRING } from 'graphQL/offers/mutations';
import { ALL_OFFERS_QUERY as REFETCH_STRING } from 'graphQL/offers/queries';

/* 
  ---------------------
  2. generate the form
  ---------------------
*/

// take in the data from the form and then apply the mutation
export default function HostingOfferForm() {
  // 2.1 define the form that handles the state changes
  const { inputs, handleChange, handleDateChange, clearForm } =
    useForm(StateFields);

  // 2.2 perform the mutation
  const [createMutation, { loading, error }] = useMutation(MUTATION_STRING, {
    variables: inputs,
    refetchQueries: [{ query: REFETCH_STRING }],
  });

  // define the router
  const router = useRouter();

  return (
    <MainGrid>
      {/* 2.3 define the onSubmit logic */}
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await createMutation(); // submit the input fields to the backend
          router.push('/offers');
          alert('Your offer has been successfully added.');
          clearForm();
        }}>
        <h2> Hosting Offer </h2>
        <DisplayError error={error} />

        {/* 2.4 define the input fields */}
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="hostLocation">
            <input
              required
              type="text"
              id="hostLocation"
              name="hostLocation"
              placeholder="Where are you located?"
              value={inputs.hostLocation}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="date">
            <DatePicker
              required
              id="date"
              name="date"
              selectsRange
              selected={inputs.startDate}
              startDate={inputs.startDate}
              endDate={inputs.endDate}
              placeholderText="When is your space available?"
              onChange={handleDateChange}
            />
          </label>
          <label htmlFor="numberPeople">
            <input
              required
              type="number"
              id="numberPeople"
              name="numberPeople"
              placeholder="How many people can you host?"
              value={inputs.numberPeople}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message">
            <TextareaAutosize
              required
              type="text"
              id="message"
              name="message"
              maxRows={15}
              maxrows="auto"
              placeholder="Anything you'd like to add?"
              value={inputs.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit Offer</button>
        </fieldset>
      </Form>
    </MainGrid>
  );
}
