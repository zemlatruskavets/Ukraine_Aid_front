import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const MainGrid = styled.div`
  display: grid;
  margin: 2rem 0;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 1fr fit-content;
  justify-content: center;
  text-align: center;
  grid-template-areas:
    '. . . . . .'
    '. . Title Title . .'
    '. . Filter Filter . .'
    '. . Exchanges Exchanges . .'
    '. . Exchanges Exchanges . .'
    '. . Exchanges Exchanges . .'
    '. . . . . .';
`;

const Title = styled.div`
  grid-area: Title;
  text-align: center;
  font-size: 1.5rem;
  font-family: ${globalVariables.text.titleText};
  text-transform: uppercase;
  color: ${globalVariables.colours.colour1};
  margin: 2rem 0 0 0;

  h1 {
    font-weight: 300; // not sure why I need to put in this h1 section for it to work
    letter-spacing: 0.2rem;
  }
  p {
    font-family: ${globalVariables.text.bodyText2};
    font-style: italic;
    font-size: 1rem;
    text-transform: none;
    color: ${globalVariables.text.textColour};
    margin: 0;
  }
`;

// this contains each row item
const Filter = styled.div`
  grid-area: Filter;
  text-align: center;
  display: grid;
  margin: 1rem 0 2rem 0;
`;

// this contains each row item
const Exchanges = styled.div`
  grid-area: Exchanges;
  text-align: center;
  display: grid;
`;

// this houses the button linking to the add request form
const AddButtonContainer = styled.div`
  margin: 4rem auto;
`;

export { MainGrid, Title, Exchanges, Filter, AddButtonContainer };
