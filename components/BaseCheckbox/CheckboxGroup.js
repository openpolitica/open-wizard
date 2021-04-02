import { CheckboxProvider } from './checkbox-context';

export default function CheckboxGroup({ children, value, onChange }) {
  const isSelected = (key) => value.has(key);

  function handleOnChange(key, selected) {
    const newValue = new Set([...value]);
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
