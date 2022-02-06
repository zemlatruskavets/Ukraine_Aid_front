import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    ' . . . . . . . . . . . .'
    '. . . Video Video Video Video Video Video . . .'
    '. . . Video Video Video Video Video Video . . .'
    ' . . . . Text Text Text Text . . . . '
    ' . . . . . Buttons Buttons . . . . .'
    ' . . . . . Buttons Buttons . . . . .'
    ' . . . . . Buttons Buttons . . . . .'
    ' . . . . . . . . . . . .';
  justify-content: start;
  text-align: center;
  align-items: center;

  h2 {
    text-transform: uppercase;
    font-family: ${globalVariables.text.titleText};
    font-weight: 200;
    font-size: 40px;
    letter-spacing: 3px;
    margin: 0;
  }

  h3 {
    text-transform: uppercase;
    font-family: ${globalVariables.text.titleText};
    font-weight: 200;
    font-size: 20px;
  }

  p {
    font-family: ${globalVariables.text.bodyText2};
    font-weight: 100;
    font-style: italic;
  }
`;

const VideoContainer = styled.div`
  grid-area: Video;
  height: auto;
  width: auto;
  justify-self: center;
  position: relative;
`;

const VideoStyles = {
  background: '#FEF6D5',
  boxShadow: '0 0 10px grey',
  borderRadius: '30px',
  overflow: 'hidden',
};

const TextByline = styled.p`
  grid-area: Text;
`;

const ButtonContainer = styled.div`
  grid-area: Buttons;
`;

export { MainGrid, VideoContainer, VideoStyles, TextByline, ButtonContainer };
