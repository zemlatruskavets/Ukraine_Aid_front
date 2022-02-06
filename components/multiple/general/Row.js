/* 
  *************************************************************************
  *************************************************************************

    NAME
    Row.js

    SUMMARY
    This file defines the component used to display an individual
    offer, request, or war crime report.

    FLOW
    1. import libraries
    2. generate the component
      2.1 determine which header to display 
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
import Link from 'next/link';
import moment from 'moment';

// component imports
import { UploadPreview } from 'components/single/Images';
import { Edit, Delete } from 'components/single/svgElements';

// style imports
import { MainGrid, PhotoContainer, TextContainer } from 'styles/components/Row';

export default function Row({ data, person = 'pass' }) {
  // 2.1 get the user information
  // only display first letter of last name
  let photoURL;
  let firstName;
  let lastNameLetter;

  // this allows for the person info to be in the first or second level of nesting
  if (person !== 'pass') {
    photoURL = person.profilePhoto?.image.publicUrlTransformed;
    firstName = person.firstName;
    lastNameLetter = person.lastName.charAt(0);
  } else {
    photoURL = data.person?.profilePhoto?.image.publicUrlTransformed;
    firstName = data.person?.firstName;
    lastNameLetter = data.person?.lastName.charAt(0);
  }

  // 2.2. get the information to display in the text on the right of the card
  function renderSwitch(category) {
    // variables for each row in the text container
    let header;
    let second_row;
    let third_row;

    // define what to return in each case (obviously rewrite this later wtf)
    switch (category) {
      case 'Travel':
        header = (
          <h3>
            Travel from {data.travelOrigin} to {data.travelDestination}{' '}
          </h3>
        );
        second_row = <p>{data.numberPeople} people</p>;
        third_row = <p>₴{data.amount}</p>;
        return [header, second_row, third_row];
      case 'Living':
        header = <h3>Living Expenses in {data.hostLocation}</h3>;
        second_row = <p>{data.numberPeople} people</p>;
        third_row = <p>₴{data.amount}</p>;
        return [header, second_row, third_row];
      case 'Hosting':
        header = <h3>A place in {data.hostLocation}</h3>;
        second_row = <p>{data.numberPeople} people</p>;
        third_row = (
          <p>
            {moment(data.startDate).format('L')} to{' '}
            {moment(data.endDate).format('L')}
          </p>
        );
        return [header, second_row, third_row];
      case 'Transport':
        header = (
          <h3>
            Transportation from {data.travelOrigin} to {data.travelDestination}
          </h3>
        );
        second_row = <p>{data.numberPeople} people</p>;
        third_row = <p>{data.time}</p>;
        return [header, second_row, third_row];
      case 'Report':
        header = <h3>{data.title}</h3>;
        second_row = <p>{moment(data.time).format('L')}</p>;
        third_row = <p>{data.location}</p>;
        return [header, second_row, third_row];
      default:
        header = <h3>Other</h3>;
        second_row = <p>{data.numberPeople} people</p>;
        third_row = null;
        return [header, second_row, third_row];
    }
  }

  // get the values from this function
  let [header, second_row, third_row] = renderSwitch(data.category);

  // 2.3 render the card
  return (
    <Link href={`/requests/${data.id}`}>
      <MainGrid>
        <div style={{ position: 'absolute', top: 20, right: 20 }}>
          {/* <Edit colour="#707070" /> */}
          {/* <Delete colour="#707070" /> */}
        </div>
        <PhotoContainer>
          <UploadPreview image={photoURL} />
          <p>
            {firstName} {lastNameLetter}.
          </p>
        </PhotoContainer>
        <TextContainer>
          {header}
          {second_row}
          {third_row}
          {(data.message || data.description) && (
            <p className="message">{data.message || data.description}</p>
          )}
        </TextContainer>
      </MainGrid>
    </Link>
  );
}
