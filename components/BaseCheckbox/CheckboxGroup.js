import { useEffect, useState } from 'react';
import { CheckboxProvider } from './checkbox-context';

export default function CheckboxGroup({
  children,
  value,
  onChange,
  forceSingle,
  forceSingleValue,
}) {
  const [state, setState] = useState([]);

  function handleOnChange(currentValue) {
    const optionIndex = state.findIndex((option) => option === currentValue);
    const forceSingleValueIndex = state.findIndex(
      (option) => option === forceSingleValue,
    );
    const removeFromArray = (array, index) => [
      ...array.slice(0, index),
      ...array.slice(index + 1),
    ];
    if (forceSingle) {
      setState([currentValue]);
      onChange([currentValue]);
      return;
    }

    if (
      !forceSingle &&
      forceSingleValueIndex !== -1 &&
      currentValue !== forceSingleValue
    ) {
      setState(removeFromArray(state, forceSingleValueIndex));
      onChange(removeFromArray(state, forceSingleValueIndex));
      return;
    }

    if (optionIndex !== -1) {
      setState(removeFromArray(state, optionIndex));
      onChange(removeFromArray(state, optionIndex));
      return;
    }

    setState([...state, currentValue]);
    onChange([...state, currentValue]);
  }

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <CheckboxProvider value={[state, handleOnChange]}>
      {children}
    </CheckboxProvider>
  );
}
