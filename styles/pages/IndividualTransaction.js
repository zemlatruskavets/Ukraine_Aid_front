import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr min-content;
  gap: 0px 0px;
  grid-template-areas: 'SideBar Content Content';
`;

const SideBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr min-content;
  gap: 0px;
  text-align: center;
  grid-template-areas:
    '. Photo .'
    '. . .'
    '. . .';
  grid-area: SideBar;
`;

const Photo = styled.div`
  grid-area: Photo;
  line-height: 2;
`;

const PhotoName = styled.div`
  grid-area: PhotoName;
`;

const VisitProfile = styled.div`
  margin: 10px auto;
  grid-area: VisitProfile;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr min-content;
  grid-template-areas:
    '. . .'
    'Title Title Title'
    'Subtitle Subtitle Subtitle'
    'Message Message Message'
    'Message Message Message'
    'Message Message Message'
    '. . .'
    '. Donate .'
    '. . .';
  grid-area: Content;
`;

const Title = styled.div`
  grid-area: Title;
  h1 {
    font-family: ${globalVariables.text.titleText};
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 300;
    color: ${globalVariables.colours.colour1};
  }
`;

const Subtitle = styled.div`
  grid-area: Subtitle;
  line-height: 1;
`;

const Message = styled.div`
  grid-area: Message;
  line-height: 1.7;
  font-family: ${globalVariables.text.bodyText2};
  font-weight: 100;
  font-style: italic;
`;

const Donate = styled.div`
  grid-area: Donate;
`;

export {
  MainGrid,
  SideBar,
  Photo,
  PhotoName,
  VisitProfile,
  Content,
  Title,
  Subtitle,
  Message,
  Donate,
};
