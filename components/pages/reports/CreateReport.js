/* 
  *************************************************************************
  *************************************************************************

    NAME
    WarCrimes.js

    SUMMARY
    This file defines the form used to create a new war crimes report.

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
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import TextareaAutosize from 'react-textarea-autosize';

// component imports
import DisplayError from 'components/multiple/general/ErrorMessage';

// util imports
import useForm from 'lib/useForm';
import { WarCrimesReportFields as StateFields } from 'graphQL/reports/mutations';

// style imports
import 'react-datepicker/dist/react-datepicker.css';
import { MainGrid, Form } from 'styles/components/Form';
import { formatOptionLabel, SelectStyles } from 'styles/components/SelectBox';

// graphQL imports
import { GetAllUsers } from 'graphQL/accounts/getUser';
import { CREATE_WAR_CRIMES_REPORT as MUTATION_STRING } from 'graphQL/reports/mutations';
import { USER_REPORTS_QUERY as REFETCH_STRING } from 'graphQL/reports/queries';

/* 
  ---------------------
  2. generate the form
  ---------------------
*/

// take in the data from the form and then apply the mutation
export default function CreateReport() {
  // 2.1 define the logic that handles the state changes
  const {
    inputs,
    handleChange,
    handleSelectChange,
    handlePhotoChange,
    handleDateChange,
    resetForm,
    clearForm,
  } = useForm(StateFields);

  // 2.2 perform the mutation
  const [createMutation, { loading, error }] = useMutation(MUTATION_STRING, {
    variables: inputs,
    refetchQueries: [{ query: REFETCH_STRING }],
  });

  // define the router
  const router = useRouter();

  const allUsers = GetAllUsers();

  return (
    <MainGrid>
      {/* 2.3 define the onSubmit logic */}
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          await createMutation(); // submit the input fields to the backend
          router.push('/reports');
          alert('Your report has been successfully added.');
          clearForm();
        }}>
        <DisplayError error={error} />
        <h2>Create New Report</h2>

        {/* 2.4 define the input fields */}
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="title">
            <input
              required
              type="text"
              id="title"
              name="title"
              placeholder="What do you want to title this incident?"
              value={inputs.title}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="location">
            <input
              required
              type="text"
              id="location"
              name="location"
              placeholder="Where did it happen?"
              value={inputs.location}
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
              placeholderText="When did it happen?"
              onChange={handleDateChange}
            />
          </label>
          <label htmlFor="witnesses">
            <Select
              options={allUsers} // Options to display in the dropdown
              autosize
              type="select"
              getOptionLabel={(option) => option.firstName}
              getOptionValue={(option) => option.id}
              formatOptionLabel={formatOptionLabel}
              isMulti
              isSearchable
              placeholder="Who else witnessed it?"
              styles={SelectStyles}
              id="witnesses"
              name="witnesses"
              onChange={handleSelectChange}
            />
          </label>
          <label htmlFor="evidence">
            <input
              type="file"
              id="evidence"
              name="evidence"
              placeholder="Can you include any evidence?"
              multiple
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            <TextareaAutosize
              required
              type="text"
              id="description"
              name="description"
              minRows={3}
              maxRows={15}
              placeholder="What happened?"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Create Report</button>
        </fieldset>
      </Form>
    </MainGrid>
  );
}
