import { useEffect, useState } from 'react';
import { RadioProvider } from './radio-context';

export default function RadioGroup({ children, value, onChange }) {
  const [state, setState] = useState('');

  function handleOnChange(currentValue) {
    setState(currentValue);
    onChange(currentValue);
  }

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <RadioProvider value={[state, handleOnChange]}>
      <div role="radiogroup">{children}</div>
    </RadioProvider>
  );
}
