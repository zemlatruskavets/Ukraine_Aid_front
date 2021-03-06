import { useRouter } from 'next/router';

import { useMutation } from '@apollo/client';
import { MainGrid, Form } from 'styles/components/Form';
import useForm from 'lib/useForm';
import Error from 'components/general/ErrorMessage';
import { CURRENT_USER_QUERY } from 'graphQL/accounts/queries';
import { SIGNIN_MUTATION } from 'graphQL/accounts/mutations';

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    const res = await signin();
    resetForm();
    router.push('/');
    // Send the email and password to the graphqlAPI
  }
  const error =
    data?.authenticatePersonWithPassword.__typename ===
    'PersonAuthenticationWithPasswordFailure'
      ? data?.authenticatePersonWithPassword
      : undefined;
  return (
    <MainGrid>
      <Form method="POST" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <Error error={error} />
        <fieldset>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Sign In</button>
        </fieldset>
      </Form>
    </MainGrid>
  );
}
