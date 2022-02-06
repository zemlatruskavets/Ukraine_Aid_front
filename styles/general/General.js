import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const HeaderStyles = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
  margin: 2rem 0;
`;

const Logo = styled.h1`
  /* font-family: 'Egyptian'; */
  font-family: ${globalVariables.text.titleText};
  font-weight: 200;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  color: #f7a693;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  text-shadow: 0 0 4px #f7a693;
  padding: 2rem;

  a {
    text-decoration: none;
    color: #f7a693;
  }
`;

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

export { Logo, HeaderStyles, ErrorStyles };
