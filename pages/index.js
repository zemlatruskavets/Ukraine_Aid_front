/* 
  *************************************************************************
  *************************************************************************

    NAME
    index.js

    SUMMARY
    This file defines the structure of the homepage.

    FLOW
    1. import external libraries and content

  *************************************************************************
  *************************************************************************
*/

/* 
  ---------------------
  1. import statements
  ---------------------
*/

// external imports
import Player from 'react-player';

// component imports
import { Accordion } from 'components/general/Accordion';
import accordionData from 'data/informationData';

// style imports
import {
  MainGrid,
  VideoContainer,
  VideoStyles,
  TextByline,
  ButtonContainer,
} from 'styles/pages/HomePage';

/* 
  -----------------------
  5. rendered components
  -----------------------
*/
export default function HomePage() {
  return (
    <MainGrid>
      <VideoContainer>
        <Player
          url="https://www.youtube.com/watch?v=u-qO42qjShg"
          controls
          playing={false}
          light="https://arthive.net/res/media/img/oy400/work/a27/245679@2x.jpg"
          style={VideoStyles}
        />
      </VideoContainer>
      <TextByline>help for the Ukrainian refugee crisis</TextByline>
      <ButtonContainer>
        <Accordion data={accordionData} />
      </ButtonContainer>
    </MainGrid>
  );
}
