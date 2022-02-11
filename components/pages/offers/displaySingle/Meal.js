// import external libraries
import Link from 'next/link';
import moment from 'moment';

// import components
import { UploadPreview } from 'components/single/Images';
import { RedButton, SingleButton } from 'components/single/Buttons';

// import styles
import {
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
} from 'styles/pages/IndividualTransaction';

// render the component
export default function ViewMealOffer({ Offer }) {
  // just show the first letter of the person's last name
  const lastName = Offer.person.lastName.charAt(0);

  return (
    <MainGrid>
      <SideBar>
        <Photo>
          <UploadPreview
            image={Offer.person?.profilePhoto?.image.publicUrlTransformed}
          />
          {Offer.person?.firstName} {lastName}.
          <VisitProfile>
            <Link href={`/accounts/${Offer.person?.id}`}>
              <SingleButton>View Profile</SingleButton>
            </Link>
          </VisitProfile>
        </Photo>
      </SideBar>
      <Content>
        <Title>
          <h1>A Meal in {Offer.hostLocation}</h1>
        </Title>
        <Subtitle>
          <p>ready at {moment(Offer.time).format('LLL')}</p>
          <p>enough for {Offer.numberPeople}</p>
        </Subtitle>
        <Message>{Offer.message && <p>{Offer.message}</p>}</Message>
        <Donate>
          <RedButton>Contact</RedButton>
        </Donate>
      </Content>
    </MainGrid>
  );
}
