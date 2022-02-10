/* 
  *************************************************************************
  *************************************************************************

    NAME
    useForm.js

    SUMMARY
    This file handles state changes based on changes to the form values.

    FLOW
    1. get the user ID of the person filling out the form
    2. the state holding the word information is defined
    3. the values are changed based on the e.target values
    4. a function to change the date field is defined
    5. functions to reset and clear the form are defined
    6. everything is returned

  *************************************************************************
  *************************************************************************
*/

// import external libraries
import { useEffect, useState } from 'react';

// internal functionalities
import { GetUser } from 'graphQL/accounts/getUser';

export default function useForm(initial = {}) {
  // 1. add the user id to the state
  var initial = { ...initial }; // passed object is not extensible
  const user = GetUser();
  initial.person = user?.id;

  // 2. the state holding the word information is defined
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join('');

  // this runs when the things we are watching change
  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  // 3. the values are changed based on the e.target values
  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      const allFiles = [...e.target.files];
      value = allFiles.map((file) => ({ image: file }));
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleSelectChange(e) {
    setInputs({
      ...inputs,
      witnesses: e.map((a) => ({ id: a.id })),
    });
  }

  function handlePhotoChange(e) {
    setInputs({
      ...inputs,
      profilePhoto: optionalArg,
    });
  }

  // 4. this is a function for handling timepicker changes
  function handleDateChange(timestamp) {
    // the first case is for the timerange object
    if (timestamp.length === 2) {
      const [first, last] = timestamp;
      setInputs({
        ...inputs,
        startDate: first,
        endDate: last,
      });
    }
    // the second case is for the single date
    else {
      setInputs({
        ...inputs,
        time: timestamp,
      });
    }
  }

  // 5. functions to reset and clear the form are defined
  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  // 6. return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    handleSelectChange,
    handlePhotoChange,
    handleDateChange,
    resetForm,
    clearForm,
  };
}
