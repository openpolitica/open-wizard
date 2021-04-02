import { useCheckboxContext } from './checkbox-context';
import * as Styled from './styles';

const numberOfAnswersAllowed = 2;

function BaseCheckbox({ children, value, ...inputProps }) {
  const { state, isSelected, handleOnChange } = useCheckboxContext();

  const isDisabled = (id) => {
    return state.size === numberOfAnswersAllowed && !state.has(id);
  };

  return (
    <Styled.Checkbox>
      <Styled.CheckboxInput>
        <Styled.Input
          type="checkbox"
          value={value}
          onChange={(event) => handleOnChange(value, event.target.checked)}
          checked={isSelected(value)}
          disabled={isDisabled(value)}
          {...inputProps}
        />
        <Styled.CheckboxControl />
      </Styled.CheckboxInput>
      <Styled.CheckboxLabel>{children}</Styled.CheckboxLabel>
    </Styled.Checkbox>
  );
}

export default BaseCheckbox;
