import { LogoImg, Header as StyledHeader } from './styles.js';

const Header = (props) => {
  return (
    <StyledHeader {...props}>
      <LogoImg src={'../images/icons/flag-peru.svg'} />
    </StyledHeader>
  );
};

export default Header;
