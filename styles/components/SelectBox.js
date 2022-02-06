import globalVariables from 'styles/general/globalVariables';
import { DropDownImage } from 'components/single/Images';

const formatOptionLabel = ({ firstName, lastName, email, profilePhoto }) => {
  // just display the first letter of the last name
  const lastLetter = lastName.charAt(0);

  return (
    <div style={{ display: 'flex', margin: '0 0px', alignItems: 'center' }}>
      <DropDownImage image={profilePhoto.image.publicUrlTransformed} />
      <div
        style={{ textAlign: 'left', margin: '0 0 0 1rem', lineHeight: '1.3' }}>
        <div style={{ textTransform: 'uppercase' }}>
          {firstName} {lastLetter}.
        </div>
        <div style={{ fontStyle: 'italic' }}>{email}</div>
      </div>
    </div>
  );
};

const SelectStyles = {
  container: (base) => ({
    ...base,
    maxWidth: '500px',
  }),
  control: ({ width, ...css }) => ({
    ...css,
    background: globalVariables.colours.background,
    border: 'none',
    fontSize: '1rem',
    borderRadius: '30px',
    textIndent: '1rem',
    textAlign: 'left',
    boxShadow: '0 0 5px lightgrey',
  }),

  // this controls the style of the background input form
  valueContainer: (provided) => ({
    ...provided,
    height: 'auto',
    padding: '0 6px',
    width: '100%',
    boxShadow: 'none',
  }),

  // this is the input component inside the form
  input: (base) => ({
    ...base,
    margin: '0',
    padding: '5px 20px',
    width: '100%',
  }),

  // this is the container to the right of the input
  indicatorsContainer: (provided) => ({
    ...provided,
    height: 'auto',
  }),

  // this controls the style of the clear icon (once there are selections)
  clearIndicator: (styles) => ({
    ...styles,
    paddingTop: 7,
    paddingBottom: 7,
  }),

  // this controls the style of each option in the dropdown menu
  option: (base) => ({
    ...base,
    background: globalVariables.colours.background,
    height: '100%',
    fontSize: '1rem',
    margin: '20px',
  }),

  // this controls the style of the placeholder message
  placeholder: (base) => ({
    ...base,
    fontSize: '1em',
    fontStyle: 'italic',
    fontFamily: globalVariables.text.bodyText2,
    color: globalVariables.text.textColour,
    fontWeight: 400,
  }),

  // this controls the style of the dropdown menu
  menu: ({ width, ...css }) => ({
    ...css,
    width: 'max-content',
    minWidth: '100%',
    background: globalVariables.colours.background,
    borderRadius: '20px',
    boxSizing: 'content-box' /* So the width will be 100% + 17px */,
  }),

  // this controls the style for the selected options
  multiValue: (base) => ({
    ...base,
    background: globalVariables.colours.background,
    boxShadow: '0 0 10px lightgrey',
    borderRadius: '20px',
    margin: '10px 5px',
  }),

  // this is the label for the selections inside the box
  multiValueLabel: (base) => ({
    ...base,
    margin: '0',
    padding: 10,
  }),

  // this is the remove icon
  multiValueRemove: (base) => ({
    ...base,
    height: '25px',
    width: '25px',
    borderRadius: '100%',
    border: '2px solid grey',
    background: 'pink',
  }),
};

export { SelectStyles, formatOptionLabel };
