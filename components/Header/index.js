import { Title, Header as StyledHeader } from './styles.js';

const Header = props => {
  return (
    <StyledHeader {...props}>
      <Title>Wizard</Title>
    </StyledHeader>
  );
};

export default Header;
