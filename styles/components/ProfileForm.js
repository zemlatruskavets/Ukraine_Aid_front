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
  grid-template-areas: '. . . . FormContainer FormContainer FormContainer FormContainer . . . .';
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr fit-content;
  gap: 10px 40px;
  justify-self: center;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
  line-height: 2;
  justify-items: center;
  grid-template-areas:
    '. PhotoContainer PhotoContainer .'
    '. . . .'
    '. FirstName FirstNameInput FirstNameInput'
    '. LastName LastNameInput LastNameInput'
    '. Home HomeInput HomeInput'
    '. Email EmailInput EmailInput'
    '. Message MessageInput MessageInput'
    '. Companions CompanionsInput CompanionsInput'
    '. Submit Submit .'
    '. . . .';
  grid-area: FormContainer;

  input,
  textarea,
  select {
    padding: 1rem 0;
    font-size: 0.9rem;
    background: transparent;
    font-family: ${globalVariables.text.bodyText2};
    font-style: italic;
    border: none;
    resize: none;
    width: 100%;

    &:focus {
      outline: 0;
      border-color: red;
    }
    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
  }
  fieldset {
    display: contents;

    &[disabled] {
      opacity: 0.5;
    }
  }

  * div {
    width: 100%;
    height: 100%;
  }
`;

// const PhotoContainer = styled.div`
//   grid-area: PhotoContainer;
//   aspect-ratio: 1;
//   object-fit: contain;
//   width: 100%;
// `;

const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr fit-content;
  grid-template-areas:
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
`;

const PhotoName = styled.div`
  grid-area: PhotoName;
  font-size: 1.6rem;
`;
const Social = styled.div`
  grid-area: Social;
`;

const FirstName = styled.div`
  grid-area: FirstName;
  text-align: right;
`;

const LastName = styled.div`
  grid-area: LastName;
  text-align: right;
`;

const Home = styled.div`
  grid-area: Home;
  text-align: right;
`;

const Email = styled.div`
  grid-area: Email;
  text-align: right;
`;

const Companions = styled.div`
  grid-area: Companions;
`;

const Message = styled.div`
  grid-area: Message;
  text-align: right;
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

const CompanionsInput = styled.div`
  grid-area: CompanionsInput;
`;

const MessageInput = styled.div`
  grid-area: MessageInput;
`;

const Submit = styled.div`
  grid-area: Submit;
`;

export {
  MainGrid,
  FormContainer,
  PhotoContainer,
  Photo,
  PhotoName,
  Social,
  FirstName,
  LastName,
  Home,
  Email,
  Companions,
  Message,
  FirstNameInput,
  LastNameInput,
  HomeInput,
  EmailInput,
  CompanionsInput,
  MessageInput,
  Submit,
};
