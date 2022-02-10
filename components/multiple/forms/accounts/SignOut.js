import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from 'graphQL/accounts/queries';
import { SIGN_OUT_MUTATION } from 'graphQL/accounts/mutations';

export default function SignOut() {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  return <a onClick={signout}>Sign Out</a>;
}
