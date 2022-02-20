import Link from 'next/link';
import NavStyles from 'styles/components/Nav';
import { GetUser } from 'graphQL/accounts/getUser';
import SignOut from 'components/pages/accounts/SignOut';

export default function Nav() {
  const user = GetUser();
  return (
    <NavStyles>
      {user && (
        <>
          <Link href="/offers">Offers</Link>
          <Link href="/requests">Requests</Link>
          <Link href="/reports">Reports</Link>
          <Link href="/accounts/myAccount">My Account</Link>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/offers">Offers</Link>
          <Link href="/requests">Requests</Link>
          <Link href="/reports">Reports</Link>
          <Link href="/accounts/myAccount">My Account</Link>
          {/* <Link href="/information">Information</Link>
          <Link href="/accounts/signUp">Register</Link>
          <Link href="/accounts/signIn">Sign In</Link> */}
        </>
      )}
    </NavStyles>
  );
}
