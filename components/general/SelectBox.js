import Select, { components, InputProps } from 'react-select';
import makeAnimated from 'react-select/animated';

import { SelectStyles } from 'styles/components/SelectBox';

import { GetAllUsers } from 'graphQL/accounts/getUser';
import { DropDownImage } from 'components/single/Images';

// take in the data from the form and then apply the mutation
export default function SelectBox({ placeholder }) {
  // get a list of all users
  const allUsers = GetAllUsers();

  const formatOptionLabel = ({ firstName, lastName, email, profilePhoto }) => {
    const lastLetter = lastName.charAt(0);

    return (
      //   get the first letter of the last name
      <div style={{ display: 'flex', margin: '0 10px' }}>
        {/* <DropDownImage image={profilePhoto.image.publicUrlTransformed} /> */}
        <div>
          {firstName} {lastLetter}
        </div>
        <div style={{ marginLeft: '10px', color: '#ccc' }}>{email}</div>
      </div>
    );
  };

  // animated select component
  const animatedComponents = makeAnimated();

  return (
    <Select
      options={allUsers} // Options to display in the dropdown
      components={false}
      autosize
      getOptionLabel={(option) => option.firstName}
      getOptionValue={(option) => option.id}
      components={animatedComponents}
      formatOptionLabel={formatOptionLabel}
      isMulti
      isSearchable
      placeholder={placeholder}
      styles={SelectStyles}
    />
  );
}
