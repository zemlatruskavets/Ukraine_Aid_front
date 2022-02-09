import styled from 'styled-components';
import RequestReset from 'components/multiple/forms/accounts/ResetPassword';
import SignIn from 'components/multiple/forms/accounts/SignIn';

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
