import { useCheckboxContext } from './checkbox-context';
import * as Styled from './styles';

function BaseCheckbox({ children, value, ...inputProps }) {
  const [state, onChange] = useCheckboxContext();
  const checked = state.find((option) => option === value);

  return (
    <Styled.Checkbox>
      <Styled.CheckboxInput>
        <Styled.Input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={(event) => onChange(event.target.value)}
          {...inputProps}
        />
        <Styled.CheckboxControl />
      </Styled.CheckboxInput>
      <Styled.CheckboxLabel>{children}</Styled.CheckboxLabel>
    </Styled.Checkbox>
  );
}

export default BaseCheckbox;
