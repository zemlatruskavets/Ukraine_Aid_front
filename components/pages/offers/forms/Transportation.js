/* 
  *************************************************************************
  *************************************************************************

    NAME
    Transportation.js

    SUMMARY
    This file defines the form used to add a new transportation offer.

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
import DisplayError from 'components/multiple/general/ErrorMessage';

// util imports
import useForm from 'lib/useForm';
import { TransportationOfferFields as StateFields } from 'data/stateFields';

// style imports
import 'react-datepicker/dist/react-datepicker.css';
import { MainGrid, Form } from 'styles/components/Form';

// graphQL imports
import { CREATE_TRANSPORT_OFFER as MUTATION_STRING } from 'graphQL/mutations';
import { ALL_OFFERS_QUERY } from 'graphQL/queries';

/* 
  ---------------------
  2. generate the form
  ---------------------
*/

// take in the data from the form and then apply the mutation
export default function TransportationOfferForm() {
  // 2.1 define the logic that handles the state changes
  const { inputs, handleChange, handleDateChange, clearForm } =
    useForm(StateFields);

  // 2.2 perform the mutation
  const [createMutation, { loading, error }] = useMutation(MUTATION_STRING, {
    variables: inputs,
    refetchQueries: [{ query: ALL_OFFERS_QUERY }],
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
          router.push('/');
          clearForm();
        }}>
        <h2>Transportation Offer</h2>
        <DisplayError error={error} />

        {/* 2.4 define the input fields */}
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="travelOrigin">
            <input
              required
              type="text"
              id="travelOrigin"
              name="travelOrigin"
              placeholder="Where are you leaving from?"
              value={inputs.travelOrigin}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="travelDestination">
            <input
              required
              type="text"
              id="travelDestination"
              name="travelDestination"
              placeholder="What's your destination?"
              value={inputs.travelDestination}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="time">
            <DatePicker
              required
              id="time"
              name="time"
              showTimeSelect
              dateFormat="MMMM d HH:mm"
              timeFormat="HH:mm"
              selected={inputs.time}
              placeholderText="When are you leaving?"
              onChange={handleDateChange}
            />
          </label>
          <label htmlFor="numberPeople">
            <input
              required
              type="number"
              id="numberPeople"
              name="numberPeople"
              placeholder="How many people can you take?"
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
