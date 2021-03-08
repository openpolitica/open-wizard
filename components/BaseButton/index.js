import { StyledButton } from './styles.js';

const BaseButton = (props) => {
  return (
    <StyledButton {...props}>
      {props.icon || null}
      {typeof props.children === 'string' ? props.children : props.text}
    </StyledButton>
  );
};

export default BaseButton;
