import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const MainGrid = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;

  h1 {
    font-family: ${globalVariables.text.titleText};
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 2.2rem;
    margin: 1rem 0 2rem 0;
  }
`;

const TransitionDiv = styled.div`
  font-family: ${globalVariables.text.bodyText3};
  opacity: ${(props) => (props.open ? '1' : '0')};
  max-height: ${(props) => (props.open ? '100rem' : '0')};
  overflow: hidden;
  transform-origin: bottom; // keep the top of the element in the same place
  transition: all 0.7s linear;
`;

export { MainGrid, TransitionDiv };
