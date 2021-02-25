import { LogoImg, Header as StyledHeader } from './styles.js';
import Link from 'next/link';

const Header = (props) => {
  return (
    <Link href="/">
      <StyledHeader {...props}>
        <LogoImg src={'/images/icons/votu_logo.svg'} />
      </StyledHeader>
    </Link>
  );
};

export default Header;
