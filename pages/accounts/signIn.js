import styled from 'styled-components';
import RequestReset from 'components/multiple/forms/accounts/ResetPassword';
import SignIn from 'components/multiple/forms/accounts/SignIn';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export default function SignInPage() {
  return (
    <GridStyles>
      <SignIn />
      <RequestReset />
    </GridStyles>
  );
}
