import { createContext, useContext } from 'react';

const RadioContext = createContext();

function useRadioContext() {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error(
      `Radio compound components cannot be rendered outside the BaseRadioButton component`,
    );
  }
  return context;
}

function RadioProvider({ value, ...props }) {
  return <RadioContext.Provider value={value} {...props} />;
}

export { useRadioContext, RadioProvider };
