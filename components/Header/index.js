import { LogoImg, ChipImg, Header as StyledHeader } from './styles.js';
import Link from 'next/link';

const Header = (props) => {
  return (
    <Link href="/">
      <StyledHeader {...props}>
        <LogoImg src={'/images/icons/flag-peru.svg'} />
        <ChipImg src={'/images/icons/beta.png'} />
      </StyledHeader>
    </Link>
  );
};

export default Header;
