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
export default function ViewHostingRequest({ Request }) {
  // just show the first letter of the person's last name
  const lastName = Request?.person.lastName.charAt(0);

  return (
    <MainGrid>
      <SideBar>
        <Photo>
          <UploadPreview
            image={Request.person?.profilePhoto?.image.publicUrlTransformed}
          />
          {Request.person?.firstName} {lastName}.
          <VisitProfile>
            <Link href={`/accounts/${Request.person?.id}`}>
              <SingleButton>View Profile</SingleButton>
            </Link>
          </VisitProfile>
        </Photo>
      </SideBar>
      <Content>
        <Title>
          <h1>Living Expenses in {Request.hostLocation}</h1>
        </Title>
        <Subtitle>
          <p>
            from {moment(Request.startDate).format('L')} until{' '}
            {moment(Request.endDate).format('L')}
          </p>
          <p>covering expenses for {Request.numberPeople}</p>
          <p>requesting ₴{Request.amount}</p>
        </Subtitle>
        <Message>{Request.message && <p>{Request.message}</p>}</Message>
        <Donate>
          <RedButton>Donate</RedButton>
        </Donate>
      </Content>
    </MainGrid>
  );
}
