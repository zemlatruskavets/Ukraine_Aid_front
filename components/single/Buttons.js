import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const SingleButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  background: ${globalVariables.colours.divBackground};
  font-family: ${globalVariables.text.bodyText2};
  border-radius: 20px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const RedButton = styled.button`
  padding: 20px 75px;
  background: ${globalVariables.colours.colour2};
  font-family: ${globalVariables.text.bodyText1};
  font-size: 1.1rem;
  border-radius: 40px;
  margin: 2rem auto;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: black;

  a {
    color: black;
  }
`;

// this button changes size and colour based on its level of nesting
const NestedButton = styled.button`
  padding: 20px 75px;
  background: ${globalVariables.colours.colour2};
  font-family: ${globalVariables.text.bodyText2};
  border-radius: 40px;
  margin: 2rem auto;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: black;

  background: ${({ level }) =>
    (level === 1 && '#B2C9C2') ||
    (level === 2 && '#FAB4A7') ||
    (level === 3 && '#C3CAA9') ||
    (level === 4 && '#E9836F')};

  font-size: ${({ level }) =>
    (level === 1 && '1.3rem') ||
    (level === 2 && '1.1rem') ||
    (level === 3 && '0.9rem') ||
    (level === 4 && '0.7rem')};

  width: ${({ level }) =>
    (level === 1 && '500px') ||
    (level === 2 && '400px') ||
    (level === 3 && '350px') ||
    (level === 4 && '320px')};

  a {
    color: black;
  }
`;

export { SingleButton, RedButton, NestedButton };
