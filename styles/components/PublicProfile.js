import styled from 'styled-components';
import globalVariables from 'styles/general/globalVariables';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(100px, 1fr));
  grid-template-rows: 1fr fit-content;
  gap: 0px 0px;
  width: 100vw;
  height: 100vh;
  grid-auto-flow: row;
  grid-template-areas: '. . . . MainContainer MainContainer MainContainer MainContainer . . . .';
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr fit-content;
  gap: 10px 40px;
  justify-self: center;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  line-height: 2;
  justify-items: center;
  grid-template-areas:
    '. PhotoContainer PhotoContainer .'
    '. FirstName FirstNameInput FirstNameInput'
    '. LastName LastNameInput LastNameInput'
    '. Home HomeInput HomeInput'
    '. Email EmailInput EmailInput'
    '. Message MessageInput MessageInput'
    '. Companions CompanionsInput CompanionsInput'
    '. . . .';
  grid-area: MainContainer;

  * div {
    width: 100%;
    height: 100%;
  }
`;

const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr fit-content;
  grid-template-areas:
    'Photo Photo Photo'
    'Photo Photo Photo'
    'Photo Photo Photo'
    'Photo Photo Photo'
    'PhotoName PhotoName PhotoName'
    'Social Social Social';
  grid-area: PhotoContainer;
  text-align: center;
`;

const Photo = styled.div`
  grid-area: Photo;
  aspect-ratio: 1;
  object-fit: contain;
  width: 100%;
`;

const PhotoName = styled.div`
  grid-area: PhotoName;
  font-size: 2rem;
`;
const Social = styled.div`
  grid-area: Social;
`;

const FirstName = styled.div`
  grid-area: FirstName;
  text-align: left;
`;

const LastName = styled.div`
  grid-area: LastName;
  text-align: left;
`;

const Home = styled.div`
  grid-area: Home;
  text-align: left;
`;

const Email = styled.div`
  grid-area: Email;
  text-align: left;
`;

const Message = styled.div`
  grid-area: Message;
  text-align: left;
`;

const FirstNameInput = styled.div`
  grid-area: FirstNameInput;
`;

const LastNameInput = styled.div`
  grid-area: LastNameInput;
`;

const HomeInput = styled.div`
  grid-area: HomeInput;
`;

const EmailInput = styled.div`
  grid-area: EmailInput;
`;

const MessageInput = styled.div`
  grid-area: MessageInput;
`;

const Submit = styled.div`
  grid-area: Submit;
`;

export {
  MainGrid,
  MainContainer,
  PhotoContainer,
  Photo,
  PhotoName,
  Social,
  FirstName,
  LastName,
  Home,
  Email,
  Message,
  FirstNameInput,
  LastNameInput,
  HomeInput,
  EmailInput,
  MessageInput,
  Submit,
};
