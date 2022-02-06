import Link from 'next/link';
import { Logo, HeaderStyles } from 'styles/general/General';
import Nav from './Nav';

export default function Header() {
  return (
    <HeaderStyles>
      <>
        <Logo>
          <Link href="/">Ukraine Aid</Link>
        </Logo>
        <Nav />
      </>
    </HeaderStyles>
  );
}
