import styled, { keyframes } from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: ' . . . . Form Form Form Form . . . .';
  grid-template-rows: 1fr fit-content;
  justify-content: center;
  padding: 10px;
`;

const Form = styled.form`
  display: grid;
  width: 100%;
  padding: 4rem 0;
  grid-area: Form;
  justify-content: center;
  justify-self: center;
  align-items: center;
  background: ${globalVariables.colours.divBackground};
  border-radius: 4rem;
  font-size: 1.2rem;
  box-shadow: 0 0 10px lightgrey;
  line-height: 2;
  justify-items: center;
  margin: 5rem 0 10rem 0;

  h2 {
    font-family: ${globalVariables.text.titleText};
    font-weight: 300;
    color: ${globalVariables.colours.colour1};
    text-transform: uppercase;
    font-size: 2rem;
    line-height: 1.5;
    margin: 1rem 0;
    padding: 0;
  }

  label {
    display: block;
    margin-bottom: 1rem;
    width: 100%;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    text-indent: 1rem;
    font-size: 0.9rem;
    background: ${globalVariables.colours.background};
    box-shadow: 0 0 5px lightgrey;
    font-family: ${globalVariables.text.bodyText2};
    border: none;
    resize: none;
    border-radius: 20px;
    padding: 10px;
    &:focus {
      outline: 0;
      border-color: pink;
    }
  }
  button,
  input[type='submit'] {
    justify-self: center;
    align-self: center;
    background: #f7a693;
    border-radius: 30px;
    box-shadow: 0 0 10px lightgrey;
    color: #707070;
    border: none;
    margin: 1rem 0 0 0;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 2rem;
    cursor: pointer;
  }
  fieldset {
    display: contents;
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      margin: 10px auto;
      content: '';
    }
  }
`;

const MinimalistForm = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  justify-self: center;
  align-items: center;
  width: 100%;
  padding: 100px 50px;
  font-size: 1.2rem;
  line-height: 2;
  justify-items: center;

  label {
    display: block
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    padding: 1rem;
    text-indent: 1rem;
    font-size: 0.9rem;
    background: ${globalVariables.colours.background};
    font-family: ${globalVariables.text.bodyText2};
    font-style: italic;
    border: none;
    padding: 10px;
    resize: none;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    justify-self: center;
    align-self: center;
    background: #f7a693;
    border-radius: 30px;
    box-shadow: 0 0 10px lightgrey;
    color: #707070;
    border: none;
    font-size: 1rem;
    font-weight: 300;
    padding: 1rem 2rem;
    cursor: pointer;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }
`;

const RowStyle = styled.div`
  display: block;
`;

export { MainGrid, Form, MinimalistForm, RowStyle };
