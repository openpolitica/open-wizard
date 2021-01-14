import { Fragment } from 'react';
import { YesButton, NoButton, StyledYesNoButton } from './styles';

export default function YesNoButton(props) {
  return (
    <StyledYesNoButton {...props}>
      <NoButton onClick={(event) => props.onNoButtonClick(event)} />
      <YesButton onClick={(event) => props.onYesButtonClick(event)} />
    </StyledYesNoButton>
  );
}
