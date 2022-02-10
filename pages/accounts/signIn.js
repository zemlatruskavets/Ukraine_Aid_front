import styled from 'styled-components';
import RequestReset from 'components/pages/accounts/ResetPassword';
import SignIn from 'components/pages/accounts/SignIn';

const GridStyles = styled.div`
  display: grid;
  justify-content: center;
`;

export default function SignInPage() {
  return (
    <GridStyles>
      <SignIn />
    </GridStyles>
  );
}
