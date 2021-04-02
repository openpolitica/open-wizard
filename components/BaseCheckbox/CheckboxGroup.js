import { useState } from 'react';
import { CheckboxProvider } from './checkbox-context';

export default function CheckboxGroup({ children, value, onChange }) {
  const [exclusiveQuestionId, setExclusiveQuestionId] = useState('');

  const isSelected = (key) => value.has(key);

  function handleOnChange(key, selected, forceSingle) {
    const newValue = new Set([...value]);

    // need to validate it first
    if (selected && forceSingle) {
      setExclusiveQuestionId(key);
      newValue.clear();
    }
    if (exclusiveQuestionId) {
      setExclusiveQuestionId('');
      newValue.clear();
      newValue.add(key);
    }
    if (selected) {
      newValue.add(key);
    } else {
      newValue.delete(key);
    }

    onChange(newValue);
  }

  return (
    <CheckboxProvider
      value={{
        state: value,
        isSelected,
        handleOnChange,
      }}>
      {children}
    </CheckboxProvider>
  );
}
