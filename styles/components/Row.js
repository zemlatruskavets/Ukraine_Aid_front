import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas: ' Photo Photo Text Text Text Text';
  grid-gap: 20px;
  box-shadow: 0 0 10px lightgrey;
  margin: 30px 0;
  padding: 30px 20px;
  border-radius: 30px;
  align-items: top;
  background: #fffbeb;
  position: relative;
`;

const PhotoContainer = styled.div`
  grid-area: Photo;
`;

const TextContainer = styled.div`
  text-align: left;
  grid-area: Text;
  vertical-align: top;
  place-items: top;
  grid-template-rows: repeat(3, 1fr);
  h3 {
    font-family: ${globalVariables.text.titleText};
    text-transform: uppercase;
    font-weight: 300;
    color: ${globalVariables.colours.colour1};
    width: 85%;
  }
  p {
    &.message {
      font-family: ${globalVariables.text.bodyText2};
      font-style: italic;
      width: 90%;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
    }
  }
`;

export { MainGrid, PhotoContainer, TextContainer };
