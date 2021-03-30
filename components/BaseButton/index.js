import { StyledButton } from './styles.js';

const BaseButton = (props) => {
  return (
    <StyledButton color={props.color || 'primary'} {...props}>
      {typeof props.children === 'string' ? props.children : props.text}
    </StyledButton>
  );
};

export default BaseButton;
