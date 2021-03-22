import { LogoImg, Header as StyledHeader } from './styles.js';
import Link from 'next/link';

const Header = (props) => {
  return (
    <StyledHeader {...props}>
      <Link href="/">
        <LogoImg src="/images/icons/votu-pe-logo.svg" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
