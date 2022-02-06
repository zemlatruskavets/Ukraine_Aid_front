/* eslint-disable no-else-return */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

/* 
  *************************************************************************
  *************************************************************************

    NAME
    Accordion.js

    SUMMARY
    This file defines a custom accordion component that visualizes
    a nested JSON document.

    FLOW
    1. import external libraries and content
    2. define the recursive function to display the JSON
    3. render the data based on this function


  *************************************************************************
  *************************************************************************
*/

/* 
  ---------------------
  1. import statements
  ---------------------
*/
// external imports
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

// data import
import accordionData from 'data/informationData';

// component imports
import { NestedButton } from 'components/single/Buttons';

// style imports
import { MainGrid, TransitionDiv } from 'styles/components/Accordion';

/* 
  ---------------------------------
  2. define the recursive function
  ---------------------------------
*/
const RecursiveAccordionFunction = (params) => {
  // set the state for whether a component is open or not
  const [isActive, setIsActive] = useState(false);

  // if the arguments have children, display them
  if (Object.keys(params).includes('children')) {
    const { title, level, children } = params; // destructure the params

    // return a button component that reveals more buttons on click
    return (
      <div>
        <NestedButton level={level} onClick={() => setIsActive(!isActive)}>
          {title}
        </NestedButton>
        <TransitionDiv open={isActive}>
          {children.map((child) => (
            <RecursiveAccordionFunction key={title} {...child} />
          ))}
        </TransitionDiv>
      </div>
    );
  } else {
    // otherwise, display final-level component
    const { title, level, externalLink, internalLink } = params;

    // return a button component that is hyperlinked to some resource
    return (
      <NestedButton level={level}>
        {typeof externalLink !== 'undefined' ? (
          <a href={externalLink}>{title}</a>
        ) : (
          <Link href={internalLink}>{title}</Link>
        )}
      </NestedButton>
    );
  }
};

/* 
  -------------------
  3. render the data
  -------------------
*/
// this part renders the accordion based on the data passed to it
const Accordion = (data) => {
  const deconstructedData = data.data;

  return (
    <MainGrid>
      {deconstructedData.map((child) => (
        <RecursiveAccordionFunction key={child.title} {...child} />
      ))}
    </MainGrid>
  );
};
export { accordionData, Accordion };
