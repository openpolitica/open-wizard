import * as Styled from './styles';
import { useRadioContext } from './radio-context';

function BaseRadioButton({ children, value, ...inputProps }) {
  const [state, onChange] = useRadioContext();
  const checked = value === state;

  return (
    <Styled.Radio>
      <Styled.RadioInput>
        <Styled.Input
          type="radio"
          value={value}
          checked={checked}
          onChange={(event) => onChange(event.target.value)}
          {...inputProps}
        />
        <Styled.RadioControl />
      </Styled.RadioInput>
      <Styled.RadioLabel>{children}</Styled.RadioLabel>
    </Styled.Radio>
  );
}

export default BaseRadioButton;
